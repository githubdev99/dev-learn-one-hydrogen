/* eslint-disable no-unused-vars */
import {
  useShop,
  useShopQuery,
  flattenConnection,
  useSession,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from './Layout.server';
import Button from './Button.client';
import ProductCard from './ProductCard';

/**
 * A server component that defines the content to display when a page isn't found (404 error)
 */
function NotFoundHero() {
  return (
    <div className="py-10 border-b border-gray-200">
      <center>
        <div className="max-w-3xl text-center mx-4 md:mx-auto flex flex-col items-center">
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6">
            We&#39;ve lost this page
          </h1>
          <p className="text-lg m-8 text-gray-500">
            We couldn’t find the page you’re looking for. Try checking the URL
            or heading back to the home page.
          </p>
          <Button
            className="w-full md:mx-auto md:w-96"
            url="/"
            label="Take me to the home page"
          />
        </div>
      </center>
    </div>
  );
}

export default function NotFound({response}) {
  if (response) {
    response.doNotStream();
    response.writeHead({status: 404, statusText: 'Not found'});
  }

  const {countryCode = 'US'} = useSession();
  const {languageCode} = useShop();

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      countryCode,
      language: languageCode,
    },
  });
  const products = data ? flattenConnection(data.products) : [];

  return (
    <Layout>
      <NotFoundHero />
    </Layout>
  );
}

const QUERY = gql`
  query NotFoundProductDetails(
    $countryCode: CountryCode
    $language: LanguageCode
  ) @inContext(country: $countryCode, language: $language) {
    products(first: 3) {
      edges {
        node {
          handle
          id
          title
          variants(first: 1) {
            edges {
              node {
                id
                title
                availableForSale
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  currencyCode
                  amount
                }
                compareAtPriceV2 {
                  currencyCode
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;
