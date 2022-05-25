/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import {
  useCart,
  CartLines,
  CartEstimatedCost,
  CartCheckoutButton,
} from '@shopify/hydrogen/client';
import {useEffect} from 'react';

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
              {/* Item */}
              <li className="cart-item d-flex">
                {/* Item image */}
                <p className="cart-item__image cart-item__image--ratio-100-122">
                  <a href="product.html">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/products/2/28a.jpg 400w,
                assets/products/2/28a.jpg 800w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="lazyload"
                    />
                  </a>
                </p>
                {/* End item image */}
                {/* Item details */}
                <p className="cart-item__details">
                  <a href="product.html" className="cart-item__title">
                    Slim fit modal cotton shirt
                  </a>
                  <span className="cart-item__variant">Grey, M</span>
                  <span className="cart-ietm__price">
                    2 <i>x</i> $113.99
                  </span>
                </p>
                {/* End item details */}
                {/* Item quantity */}
                <div className="cart-item__quantity">
                  <div className="cart-product__quantity-field">
                    <div className="quantity-field__minus js-quantity-down">
                      <a href="#">-</a>
                    </div>
                    <input
                      type="text"
                      defaultValue={1}
                      className="quantity-field__input js-quantity-field"
                    />
                    <div className="quantity-field__plus js-quantity-up">
                      <a href="#">+</a>
                    </div>
                  </div>
                </div>
                {/* End item quantity */}
                {/* Item delete */}
                <p className="cart-item__delete">
                  <a href="#">
                    <i className="lnil lnil-close" />
                  </a>
                </p>
                {/* Item delete */}
              </li>
              {/* End item */}
              {/* Item */}
              <li className="cart-item d-flex">
                {/* Item image */}
                <p className="cart-item__image cart-item__image--ratio-100-122">
                  <a href="product.html">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/products/2/27_1-a.jpg 400w,
                assets/products/2/27_1-a.jpg 800w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="lazyload"
                    />
                  </a>
                </p>
                {/* End item image */}
                {/* Item details */}
                <p className="cart-item__details">
                  <a href="product.html" className="cart-item__title">
                    Suede sport shoes
                  </a>
                  <span className="cart-item__variant">Bold Brown, 40</span>
                  <span className="cart-ietm__price">
                    1 <i>x</i> $45.5
                  </span>
                </p>
                {/* End item details */}
                {/* Item quantity */}
                <div className="cart-item__quantity">
                  <div className="cart-product__quantity-field">
                    <div className="quantity-field__minus js-quantity-down">
                      <a href="#">-</a>
                    </div>
                    <input
                      type="text"
                      defaultValue={1}
                      className="quantity-field__input js-quantity-field"
                    />
                    <div className="quantity-field__plus js-quantity-up">
                      <a href="#">+</a>
                    </div>
                  </div>
                </div>
                {/* End item quantity */}
                {/* Item delete */}
                <p className="cart-item__delete">
                  <a href="#">
                    <i className="lnil lnil-close" />
                  </a>
                </p>
                {/* Item delete */}
              </li>
              {/* End item */}
              {/* Item */}
              <li className="cart-item d-flex">
                {/* Item image */}
                <p className="cart-item__image cart-item__image--ratio-100-122">
                  <a href="product.html">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/products/2/29a.jpg 400w,
                assets/products/2/29a.jpg 800w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="lazyload"
                    />
                  </a>
                </p>
                {/* End item image */}
                {/* Item details */}
                <p className="cart-item__details">
                  <a href="product.html" className="cart-item__title">
                    Pebbled crossbody belt bag
                  </a>
                  <span className="cart-ietm__price">
                    1 <i>x</i> $129.99
                  </span>
                </p>
                {/* End item details */}
                {/* Item quantity */}
                <div className="cart-item__quantity">
                  <div className="cart-product__quantity-field">
                    <div className="quantity-field__minus js-quantity-down">
                      <a href="#">-</a>
                    </div>
                    <input
                      type="text"
                      defaultValue={1}
                      className="quantity-field__input js-quantity-field"
                    />
                    <div className="quantity-field__plus js-quantity-up">
                      <a href="#">+</a>
                    </div>
                  </div>
                </div>
                {/* End item quantity */}
                {/* Item delete */}
                <p className="cart-item__delete">
                  <a href="#">
                    <i className="lnil lnil-close" />
                  </a>
                </p>
                {/* Item delete */}
              </li>
              {/* End item */}
            </ul>
            {/* End cart items */}
          </div>
          {/* End top and products */}
          {/* Bottom */}
          <div className="canvas-cart__bottom">
            {/* Subtotal */}
            <div className="header-cart__subtotal d-flex">
              {/* Title */}
              <div className="subtotal__title">Subtotal</div>
              {/* End title */}
              {/* Value */}
              <div className="subtotal__value">$272.47</div>
              {/* End value */}
            </div>
            {/* End subtotal */}
            {/* Header cart action */}
            <div className="header-cart__action">
              <a href="checkout.html" className="header-cart__button">
                Checkout
              </a>
              <a href="cart.html" className="header-cart__button">
                View cart
              </a>
            </div>
            {/* End Header cart action */}
          </div>
          {/* End bottom */}
        </div>
        {/* End d-flex */}
      </div>
      {/* End content */}
    </div>
  );
}
