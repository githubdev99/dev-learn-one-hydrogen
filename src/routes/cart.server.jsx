/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
  Seo,
  CacheDays,
  useSession,
} from '@shopify/hydrogen';
import Layout from '../components/Layout.server';
import {Fragment} from 'react';
import CartSectionPage from '../components/section/CartSectionPage.client';

export default function Cart() {
  return (
    <Layout>
      <CartSectionPage />
    </Layout>
  );
}
