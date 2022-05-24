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
import HomeSlider from './../HomeSlider.server';

export default function HomeSection() {
  return (
    <Fragment>
      <HomeSlider />
    </Fragment>
  );
}
