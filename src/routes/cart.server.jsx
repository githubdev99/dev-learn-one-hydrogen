/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {Suspense, Fragment} from 'react';

import Layout from '../components/Layout.server';
import CartSection from '../components/section/CartSection.server';

export default function Cart() {
  return (
    <Layout>
      <CartSection />
    </Layout>
  );
}
