/* eslint-disable hydrogen/prefer-image-component */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react';
import {Link, useCart, useCartLine, CartLines} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
import CountrySelector from './CountrySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [scrollbarWidth, setScrollbarWidth] = useState(0);
  // const {isCartOpen} = useCartUI();

  // useEffect(() => {
  //   const scrollbarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;

  //   setScrollbarWidth(scrollbarWidth);
  // }, [isCartOpen]);

  const {totalQuantity} = useCart();

  return (
    // <header className="h-20 lg:h-32" role="banner">
    //   <div
    //     className={`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
    //       isMobileNavOpen ? '' : 'bg-opacity-95'
    //     }`}
    //   >
    //     <div
    //       className="h-full flex lg:flex-col place-content-between"
    //       style={{
    //         paddingRight: isCartOpen ? scrollbarWidth : 0,
    //       }}
    //     >
    //       <div className="text-center w-full flex justify-between items-center">
    //         <CountrySelector />
    //         <MobileNavigation
    //           collections={collections}
    //           isOpen={isMobileNavOpen}
    //           setIsOpen={setIsMobileNavOpen}
    //         />
    //         <Link
    //           className="font-black uppercase text-3xl tracking-widest"
    //           to="/"
    //         >
    //           {storeName}
    //         </Link>
    //         <CartToggle
    //           handleClick={() => {
    //             if (isMobileNavOpen) setIsMobileNavOpen(false);
    //           }}
    //         />
    //       </div>
    //       <Navigation collections={collections} storeName={storeName} />
    //     </div>
    //   </div>
    // </header>

    <header className="header">
      {/* Container */}
      <div className="container container--type-2">
        {/* Header container */}
        <div className="header__container d-flex align-items-center">
          {/* Mobile menu */}
          <div className="header__mobile-menu">
            {/* Open mobile menu */}
            <div className="mobile-menu__open">
              <a href="#" className="js-open-mobile-menu">
                <i className="lnil lnil-menu" />
              </a>
            </div>
            {/* End open mobile menu */}
            {/* Mobile menu */}
            <div className="mobile-menu js-mobile-menu">
              {/* Overlay */}
              <div className="mobile-menu__overlay js-close-mobile-menu" />
              {/* End overlay */}
              {/* Content */}
              <div className="mobile-menu__content">
                {/* Close mobile menu */}
                <div className="mobile-menu__close">
                  <a href="#" className="js-close-mobile-menu">
                    <i className="lnil lnil-close" />
                  </a>
                </div>
                {/* End close mobile menu */}
                {/* Mobile logo */}
                <h3 className="mobile-menu__logo">{storeName}</h3>
                {/* End mobile logo */}
                {/* Mobile Nav */}
                <ul className="mobile-menu__nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="mobile-menu__dropdown">
                    <a href="shop.html">Shop</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li>
                        <a href="shop.html">Shop Page </a>
                      </li>
                      <li>
                        <a href="product.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                      <span className="lnil lnil-chevron-down" />
                    </div>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                </ul>
                {/* End Mobile nav */}
              </div>
              {/* End content */}
            </div>
            {/* End mobile menu */}
          </div>
          {/* End mobile menu */}
          {/* Logo */}
          <h1 className="header__logo">
            <Link to="/">{storeName}</Link>
          </h1>
          {/* End logo */}
          {/* Navigation */}
          <ul className="header__nav">
            <li>
              <Link to="/" className="nav__item">
                HOME
              </Link>
            </li>
            <li>
              <a href="shop.html" className="nav__item">
                Shop
              </a>
              {/* MegaMenu */}
              <div className="nav__mega-menu">
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Shop</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li>
                      <a href="shop.html">Grid 3 Column</a>
                    </li>
                    <li>
                      <a href="shop-2.html">
                        Grid 4 Column{' '}
                        <span className="nav__item-tag nav__item-tag--default">
                          default
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-3.html">Listing</a>
                    </li>
                    <li>
                      <a href="shop-4.html">Collection</a>
                    </li>
                    <li>
                      <a href="shop-5.html">Metro</a>
                    </li>
                    <li>
                      <a href="shop-6.html">
                        Categories{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-7.html">With Sidebar 1</a>
                    </li>
                    <li>
                      <a href="shop-8.html">With Sidebar 2</a>
                    </li>
                    <li>
                      <a href="shop-9.html">Instagram</a>
                    </li>
                    <li>
                      <a href="shop-10.html">Vertical Menu</a>
                    </li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Product layouts</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li>
                      <a href="product.html">Default</a>
                    </li>
                    <li>
                      <a href="product-layout-2.html">
                        Sticky Info{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-layout-3.html">With Sidebar</a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">Color Background</a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">Vertical Menu</a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">Width 1170</a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">
                        Sticky Info 2{' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">
                        Sticky Info 3{' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">
                        Grid Gallery (4 images){' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">
                        Grid Gallery (5 images){' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-layout-4.html">
                        Sticky Tabs Accordion{' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Product types</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li>
                      <a href="product-type-1.html">Simple</a>
                    </li>
                    <li>
                      <a href="product-type-2.html">Various</a>
                    </li>
                    <li>
                      <a href="product-type-3.html">Colors Swatches</a>
                    </li>
                    <li>
                      <a href="product-type-4.html">Images Swatches</a>
                    </li>
                    <li>
                      <a href="product-type-5.html">Groupped</a>
                    </li>
                    <li>
                      <a href="product-type-6.html">Affiliate</a>
                    </li>
                    <li>
                      <a href="product-type-7.html">Featured Video</a>
                    </li>
                    <li>
                      <a href="product-type-8.html">Guarantee Safe Checkout</a>
                    </li>
                    <li>
                      <a href="product-type-9.html">Countdown Timer</a>
                    </li>
                    <li>
                      <a href="product-type-10.html">
                        Pre-orders{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-type-1.html">On Sale</a>
                    </li>
                    <li>
                      <a href="product-type-1.html">Out of Stock</a>
                    </li>
                    <li>
                      <a href="product-type-10.html">
                        With Button Paypal{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-type-1.html">Bundle</a>
                    </li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Others</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="order-complete.html">Order Complete</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="cart.html">Order Tracking</a>
                    </li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Banner */}
                <div className="mega-menu__banner">
                  <img
                    alt="Image"
                    data-sizes="auto"
                    data-srcset="assets/images/default/megamenu_promo.jpg 362w,
              assets/images/default/megamenu_promo.jpg 724w"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    className="lazyload"
                  />
                </div>
                {/* End banner */}
              </div>
              {/* End MegaMenu */}
            </li>
            <li>
              <a href="about.html" className="nav__item">
                ABOUT
              </a>
            </li>
          </ul>
          {/* End navigation */}
          {/* Language switcher */}
          <ul className="header__language-switcher">
            <li>
              <a href="#" className="active">
                EN
              </a>
            </li>
            <li>
              <a href="#">FR</a>
            </li>
          </ul>
          {/* End language switcher */}
          {/* Header right */}
          <ul className="header__right">
            <li>
              <a href="#" className="js-open-popup-search">
                <i className="lnil lnil-search-alt"></i>
              </a>
            </li>
            <li className="header__cart">
              <a href="#" to="/cart" className="js-open-canvas-cart">
                <i className="lnil lnil-cart"></i>
                <span>{totalQuantity}</span>
              </a>
            </li>
          </ul>
          {/* End header right */}
        </div>
        {/* End header container */}
      </div>
      {/* End container */}
    </header>
  );
}
