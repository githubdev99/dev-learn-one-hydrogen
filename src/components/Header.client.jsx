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

  useEffect(() => {
    console.log(JSON.stringify(collections));
  }, []);

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
                SHOP
              </a>
              <ul className="nav__dropdown-menu">
                <li>
                  <Link to="/shop">Shop All</Link>
                </li>
                <li>
                  <a href="blog-with-sidebar.html">Blog with sidebar</a>
                </li>
                <li>
                  <a href="post.html">Blog post</a>
                </li>
              </ul>
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
              {/* Open Cart Sidebar */}
              {/* <a href="#" to="/cart" className="js-open-canvas-cart">
                <i className="lnil lnil-cart"></i>
                <span>{totalQuantity}</span>
              </a> */}

              {/* Go to Cart Page */}
              <Link to={`/cart`} className="text-blue-600 hover:underline">
                <i className="lnil lnil-cart"></i>
                <span>{totalQuantity}</span>
              </Link>
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
