/* eslint-disable hydrogen/prefer-image-component */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import {
  useCart,
  CartLines,
  CartEstimatedCost,
  CartCheckoutButton,
  CartShopPayButton,
  useCartLine,
  CartLineImage,
  Link,
  CartLineProductTitle,
  CartLineQuantity,
  CartLinePrice,
  CartLineQuantityAdjustButton,
} from '@shopify/hydrogen/client';
import {useEffect} from 'react';
import $ from 'jquery';

export default function CartSection() {
  const {totalQuantity} = useCart();

  return (
    <div className="canvas-cart js-canvas-cart">
      <div className="canvas-cart__overlay js-close-canvas-cart" />
      {/* Content */}
      <div className="canvas-cart__content">
        {/* D-flex */}
        <div className="canvas-cart__d-flex">
          {/* Top and products */}
          <div className="canvas-cart__top-and-products">
            {/* Heading */}
            <div className="canvas-cart__heading d-flex align-items-center">
              {/* H3 */}
              <h3 className="canvas-cart__h3">
                Cart {totalQuantity > 0 && `(${totalQuantity})`}
              </h3>
              {/* End h3 */}
              {/* Close */}
              <div className="canvas-cart__close">
                <a href="#" className="js-close-canvas-cart">
                  <i className="lnil lnil-close" />
                </a>
              </div>
              {/* End close */}
            </div>
            {/* End heading */}
            {/* Cart items */}
            <ul className="header-cart__items">
              {totalQuantity === 0 ? (
                <CartEmpty />
              ) : (
                <CartLines>
                  <CartItems />
                </CartLines>
              )}
            </ul>
            {/* End cart items */}
          </div>
          {/* End top and products */}
          {totalQuantity > 0 && <CartFooter />}
        </div>
        {/* End d-flex */}
      </div>
      {/* End content */}
    </div>
  );
}

function CartItems() {
  const {merchandise} = useCartLine();

  return (
    <li className="cart-item d-flex">
      {/* Item image */}
      <p className="cart-item__image cart-item__image--ratio-100-122">
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className="bg-white border border-black border-opacity-5 rounded-xl lazyload"
            options={{width: 98, height: 98, crop: 'center'}}
          />
        </Link>
      </p>
      {/* End item image */}
      {/* Item details */}
      <p className="cart-item__details">
        <Link
          to={`/products/${merchandise.product.handle}`}
          className="cart-item__title"
        >
          <CartLineProductTitle className="text-lg font-medium" />
        </Link>
        <span className="cart-item__variant">{merchandise.title}</span>
        <span className="cart-ietm__price flex">
          <CartLineQuantity /> <i>x</i> <CartLinePrice />
        </span>
      </p>
      {/* End item details */}
      {/* Item quantity */}
      <div className="cart-item__quantity">
        <div className="flex border rounded border-gray-300 items-center overflow-auto mt-2">
          <CartLineQuantityAdjustButton
            adjust="decrease"
            aria-label="Decrease quantity"
            className="p-2 disabled:pointer-events-all disabled:cursor-wait"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </CartLineQuantityAdjustButton>
          <CartLineQuantity
            as="div"
            className="p-2 text-gray-900 text-md text-center"
          />
          <CartLineQuantityAdjustButton
            adjust="increase"
            aria-label="Increase quantity"
            className="p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </CartLineQuantityAdjustButton>
        </div>
      </div>
      {/* End item quantity */}
      {/* Item delete */}
      <p className="cart-item__delete">
        <a href="#">
          <CartLineQuantityAdjustButton
            adjust="remove"
            aria-label="Remove from cart"
            className="disabled:pointer-events-all disabled:cursor-wait"
          >
            <i className="lnil lnil-close" />
          </CartLineQuantityAdjustButton>
        </a>
      </p>
      {/* Item delete */}
    </li>
  );
}

function CartEmpty() {
  const handleCloseCanvasCart = () => {
    $('.js-canvas-cart').removeClass('active');
    $('body').css('overflow', 'visible');
  };

  return (
    <div className="p-7 flex flex-col">
      <p className="mb-4 text-lg text-gray-500 text-center">
        Your cart is empty
      </p>
      <button
        type="button"
        className="header-cart__button"
        onClick={handleCloseCanvasCart}
      >
        Continue Shopping
      </button>
    </div>
  );
}

function CartFooter() {
  return (
    <div className="canvas-cart__bottom">
      {/* Subtotal */}
      <div className="header-cart__subtotal d-flex">
        {/* Title */}
        <div className="subtotal__title">Subtotal</div>
        {/* End title */}
        {/* Value */}
        <div className="subtotal__value">
          <CartEstimatedCost
            amountType="subtotal"
            role="cell"
            className="text-right"
          />
        </div>
        {/* End value */}
      </div>
      {/* End subtotal */}
      {/* Header cart action */}
      <div className="header-cart__action">
        <CartShopPayButton className="flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md" />
        <CartCheckoutButton className="header-cart__button ease-in-out duration-300">
          Checkout
        </CartCheckoutButton>
      </div>
      {/* End Header cart action */}
    </div>
  );
}
