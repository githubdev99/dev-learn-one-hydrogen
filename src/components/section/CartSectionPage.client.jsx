/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable hydrogen/prefer-image-component */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  useCart,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  CartShopPayButton,
  CartEstimatedCost,
  useCartLine,
} from '@shopify/hydrogen/client';
import {Fragment, useEffect} from 'react';

/**
 * A client component that contains the merchandise that a customer intends to purchase, and the estimated cost associated with the cart
 */
export default function CartSectionPage() {
  const {totalQuantity} = useCart();

  return (
    <div className="shopping-cart">
      {/* Container */}
      <div className="container container--type-2">
        {/* Second container */}
        <div className="container">
          {/* Title */}
          <h1 className="shopping-cart__title">Shopping Cart</h1>
          {/* End title */}
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <div className="row">
              {/* Left */}
              <div className="col-lg-7 col-xl-8">
                {/* Cart container */}
                <div className="shopping-cart__container">
                  {/*- Table responsive */}
                  <div className="table-responsive">
                    {/* Table */}
                    <table className="shopping-cart__table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <CartLines>
                          <CartItems />
                        </CartLines>
                      </tbody>
                    </table>
                    {/* End table */}
                  </div>
                  {/* End table responsive */}
                </div>
                {/* End cart container */}
              </div>
              {/* End left */}
              {/* Right */}
              <div className="col-lg-5 col-xl-4">
                {/* Order summary */}
                <div className="shopping-cart__order-summary">
                  {/* Background */}
                  <div className="order-summary__background">
                    {/* Title */}
                    <h3 className="order-summary__title">Order Summary</h3>
                    {/* End title */}
                    <div className="order-summary__subtotal">
                      <div className="summary-subtotal__title">Subtotal</div>
                      <div className="summary-subtotal__price">
                        <CartEstimatedCost amountType="subtotal" />
                      </div>
                    </div>
                    <div className="order-summary__subtotal">
                      <div className="summary-subtotal__title">Tax</div>
                      <div className="summary-subtotal__price">
                        {<CartEstimatedCost amountType="tax" /> > 0 ? (
                          <CartEstimatedCost amountType="tax" />
                        ) : (
                          0
                        )}
                      </div>
                    </div>
                    <div className="order-summary__total">
                      <div className="summary-total__title">Total</div>
                      <div className="summary-total__price">
                        <CartEstimatedCost amountType="total" />
                      </div>
                    </div>
                    <div className="order-summary__proceed-to-checkout">
                      <CartShopPayButton className="flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md" />
                    </div>
                    <div className="order-summary__proceed-to-checkout pt-0">
                      <CartCheckoutButton className="second-button">
                        Proceed to checkout
                      </CartCheckoutButton>
                    </div>
                    <div className="order-summary__accept-payment-methods">
                      <h4 className="accept-payment-methods__title">
                        Accept Payment Methods
                      </h4>
                      <img
                        src="assets/images/default/payment.png"
                        alt="Payment"
                      />
                    </div>
                  </div>
                  {/* End background */}
                  {/* Action */}
                  <div className="order-summary__action">
                    <Link to="/">Continue shopping</Link>
                  </div>
                  {/* End action */}
                </div>
                {/* End order summary */}
              </div>
              {/* End right */}
            </div>
          )}
        </div>
        {/* End second container */}
      </div>
      {/* End container */}
    </div>
  );
}

function CartItems() {
  const {merchandise} = useCartLine();

  return (
    <Fragment>
      <tr>
        <td>
          <div className="shopping-cart__product">
            <div className="cart-product__image">
              <Link to={`/products/${merchandise.product.handle}`}>
                <CartLineImage
                  className="bg-white border border-black border-opacity-5 rounded-xl lazyload"
                  options={{width: 98, height: 98, crop: 'center'}}
                />
              </Link>
            </div>
            <div className="cart-product__title-and-variant">
              <h3 className="cart-product__title">
                <Link
                  to={`/products/${merchandise.product.handle}`}
                  className="cart-item__title"
                >
                  <CartLineProductTitle className="text-lg font-medium" />
                </Link>
              </h3>
              <div className="cart-product__variant">
                <ul className="text-xs space-y-1">
                  {merchandise.selectedOptions.map(({name, value}) => (
                    <li key={name}>
                      {name}: {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="cart-product__price">
            {parseFloat(merchandise.priceV2.amount).toFixed(2)}
          </div>
        </td>
        <td>
          <div className="cart-item__quantity p-0">
            <div className="flex border rounded border-gray-300 items-center overflow-auto">
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
        </td>
        <td>
          <div className="cart-product__price">
            <CartLinePrice />
          </div>
        </td>
        <td>
          <div className="cart-product__delete">
            <a href="#">
              <CartLineQuantityAdjustButton
                adjust="remove"
                aria-label="Remove from cart"
                className="disabled:pointer-events-all disabled:cursor-wait"
              >
                <i className="lnil lnil-close" />
              </CartLineQuantityAdjustButton>
            </a>
          </div>
        </td>
      </tr>
    </Fragment>
  );
}

function CartEmpty() {
  return (
    <div className="p-7 flex flex-col">
      <p className="mb-4 text-lg text-gray-500 text-center">
        Your cart is empty
      </p>
      <Link
        to="/"
        className="header-cart__button hover:bg-[#000] hover:text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
