/* eslint-disable prettier/prettier */
import {CartProvider} from '@shopify/hydrogen/client';
import {createContext} from 'react';

export const CartContext = createContext(null);

export default function CartPageProvider({children, numCartLines}) {
  return <CartProvider numCartLines={numCartLines}>{children}</CartProvider>;
}
