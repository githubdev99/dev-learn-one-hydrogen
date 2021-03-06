/* eslint-disable no-unused-vars */
import {
  useShop,
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
  CacheHours,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {Suspense} from 'react';

import Header from './Header.client';
import Footer from './Footer.server';
import Cart from './Cart.client';
import SearchPopup from './SearchPopup.client';
import CartSection from './section/CartSection.client';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({children, hero}) {
  const {languageCode} = useShop();

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      language: languageCode,
      numCollections: 9,
    },
    cache: CacheHours(),
    preload: '*',
  });
  const collections = data ? flattenConnection(data.collections) : null;
  const productTypes = data ? flattenConnection(data.productTypes) : null;
  const storeName = data ? data.shop.name : '';

  return (
    <LocalizationProvider preload="*">
      {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
      <Suspense fallback={null}>
        <Header
          collections={collections}
          storeName={storeName}
          productTypes={productTypes}
        />
        {/* <Cart /> */}
      </Suspense>
      <main role="main" id="mainContent" className="relative bg-gray-50">
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer storeName={storeName} />
      {/* <CartSection /> */}
      <SearchPopup />
    </LocalizationProvider>
  );
}

const QUERY = gql`
  query layoutContent($language: LanguageCode, $numCollections: Int!)
  @inContext(language: $language) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
    productTypes(first: 10) {
      edges {
        node
      }
    }
  }
`;
