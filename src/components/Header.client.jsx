/* eslint-disable hydrogen/prefer-image-component */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
import CountrySelector from './CountrySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

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
                <h3 className="mobile-menu__logo">DUROTAN</h3>
                {/* End mobile logo */}
                {/* Mobile Nav */}
                <ul className="mobile-menu__nav">
                  <li className="mobile-menu__dropdown">
                    <a href="index.html">Home</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li>
                        <a href="index.html">Home Page 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Page 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Page 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home Page 5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home Page 6</a>
                      </li>
                      <li>
                        <a href="index-7.html">Home Page 7</a>
                      </li>
                      <li>
                        <a href="index-8.html">Home Page 8</a>
                      </li>
                      <li>
                        <a href="index-9.html">Home Page 9</a>
                      </li>
                      <li>
                        <a href="index-10.html">Home Page 10</a>
                      </li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                      <span className="lnil lnil-chevron-down" />
                    </div>
                  </li>
                  <li>
                    <a href="about.html">About</a>
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
                  <li className="mobile-menu__dropdown">
                    <a href="404.html">Pages</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li>
                        <a href="404.html">404 Page </a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                      <span className="lnil lnil-chevron-down" />
                    </div>
                  </li>
                  <li className="dropdown">
                    <a href="blog.html">News</a>
                    <ul className="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                      <li>
                        <a href="blog.html">Blog 1</a>
                      </li>
                      <li>
                        <a href="blog-with-sidebar.html">Blog 2</a>
                      </li>
                      <li>
                        <a href="post.html">Blog Single</a>
                      </li>
                    </ul>
                    <div className="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                      <span className="lnil lnil-chevron-down" />
                    </div>
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
            <a href="index.html">DUROTAN</a>
          </h1>
          {/* End logo */}
          {/* Navigation */}
          <ul className="header__nav">
            <li>
              <a href="index.html" className="nav__item">
                Home
              </a>
              {/* MegaMenu */}
              <div className="nav__mega-menu">
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Styles</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li>
                      <a href="index.html">Default</a>
                    </li>
                    <li>
                      <a href="index-2.html">Full Width</a>
                    </li>
                    <li>
                      <a href="index-3.html">Modern</a>
                    </li>
                    <li>
                      <a href="index-4.html">
                        Collections{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="index-5.html">Dark Skin</a>
                    </li>
                    <li>
                      <a href="index-6.html">
                        Classic{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="index-7.html">
                        Best Selling{' '}
                        <span className="nav__item-tag nav__item-tag--hot">
                          hot
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="index-8.html">Sidebar</a>
                    </li>
                    <li>
                      <a href="index-9.html">Minimal</a>
                    </li>
                    <li>
                      <a href="index-10.html">Shoppable</a>
                    </li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Topic</div>
                  {/* End column title */}
                  {/* Column nav */}
                  <ul className="standard-column__nav">
                    <li>
                      <a href="index.html">Furniture 1</a>
                    </li>
                    <li>
                      <a href="index.html">Furniture 2 </a>
                    </li>
                    <li>
                      <a href="index.html">
                        Decoration{' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        Cosmetic{' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        Jewellry{' '}
                        <span className="nav__item-tag nav__item-tag--new">
                          new
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">Bags</a>
                    </li>
                    <li>
                      <a href="index.html">Shoes</a>
                    </li>
                    <li>
                      <a href="index.html">Gadgets</a>
                    </li>
                    <li>
                      <a href="index.html">Plants</a>
                    </li>
                    <li>
                      <a href="index.html">Perfume</a>
                    </li>
                    <li>
                      <a href="index.html">Single Product</a>
                    </li>
                    <li>
                      <a href="index.html">Wine</a>
                    </li>
                    <li>
                      <a href="index.html">Bakery </a>
                    </li>
                  </ul>
                  {/* End column nav */}
                </div>
                {/* End column */}
                {/* Column */}
                <div className="mega-menu__standard-column">
                  {/* Column title */}
                  <div className="standard-column__title">Brands</div>
                  {/* End column title */}
                  {/* Brands */}
                  <div className="menu-brands__items">
                    {/* Item */}
                    <div className="menu-brand-item">
                      <a href="#">
                        <img
                          alt="Image"
                          src="assets/images/default/menu_brand_1.png"
                        />
                      </a>
                    </div>
                    {/* End item */}
                    {/* Item */}
                    <div className="menu-brand-item">
                      <a href="#">
                        <img
                          alt="Image"
                          src="assets/images/default/menu_brand_2.png"
                        />
                      </a>
                    </div>
                    {/* End item */}
                    {/* Item */}
                    <div className="menu-brand-item">
                      <a href="#">
                        <img
                          alt="Image"
                          src="assets/images/default/menu_brand_3.png"
                        />
                      </a>
                    </div>
                    {/* End item */}
                    {/* Item */}
                    <div className="menu-brand-item">
                      <a href="#">
                        <img
                          alt="Image"
                          src="assets/images/default/menu_brand_4.png"
                        />
                      </a>
                    </div>
                    {/* End item */}
                  </div>
                  {/* End brands */}
                </div>
                {/* End column */}
              </div>
              {/* End MegaMenu */}
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
              <a href="product.html" className="nav__item">
                Product
              </a>
              {/* Dropdown menu */}
              <ul className="nav__dropdown-menu">
                <li>
                  <a href="product.html">
                    Product Layout 1{' '}
                    <span className="nav__item-tag nav__item-tag--default">
                      default
                    </span>
                  </a>
                </li>
                <li>
                  <a href="product-layout-2.html">Product Layout 2</a>
                </li>
                <li>
                  <a href="product-layout-3.html">Product Layout 3</a>
                </li>
                <li>
                  <a href="product-layout-4.html">Product Layout 4</a>
                </li>
                <li>
                  <a href="product-type-1.html">Product Type 1</a>
                </li>
                <li>
                  <a href="product-type-2.html">Product Type 2</a>
                </li>
                <li>
                  <a href="product-type-3.html">Product Type 3</a>
                </li>
                <li>
                  <a href="product-type-4.html">Product Type 4</a>
                </li>
                <li>
                  <a href="product-type-5.html">Product Type 5</a>
                </li>
                <li>
                  <a href="product-type-6.html">Product Type 6</a>
                </li>
                <li>
                  <a href="product-type-7.html">Product Type 7</a>
                </li>
                <li>
                  <a href="product-type-8.html">Product Type 8</a>
                </li>
                <li>
                  <a href="product-type-9.html">
                    Product Type 9{' '}
                    <span className="nav__item-tag nav__item-tag--hot">
                      hot
                    </span>
                  </a>
                </li>
                <li>
                  <a href="product-type-10.html">
                    Product Type 10{' '}
                    <span className="nav__item-tag nav__item-tag--new">
                      new
                    </span>
                  </a>
                </li>
              </ul>
              {/* End dropdown menu */}
            </li>
            <li>
              <a href="blog.html" className="nav__item">
                Blog
              </a>
              {/* Dropdown menu */}
              <ul className="nav__dropdown-menu">
                <li>
                  <a href="blog.html">Blog full width</a>
                </li>
                <li>
                  <a href="blog-with-sidebar.html">Blog with sidebar</a>
                </li>
                <li>
                  <a href="post.html">Blog post</a>
                </li>
              </ul>
              {/* End dropdown menu */}
            </li>
            <li>
              <a href="#" className="nav__item">
                Pages
              </a>
              {/* Dropdown menu */}
              <ul className="nav__dropdown-menu">
                <li>
                  <a href="404.html">404 Page </a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="coming-soon.html">Coming Soon</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
              </ul>
              {/* End dropdown menu */}
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
                <AiOutlineSearch />
              </a>
            </li>
            <li>
              <a href="account.html">
                <AiOutlineUser />
              </a>
            </li>
            <li className="header__cart">
              <a href="cart.html">
                <AiOutlineShoppingCart />
                <span>2</span>
              </a>
              {/* Header cart */}
              <div className="header-cart">
                {/* Cart items */}
                <ul className="header-cart__items">
                  {/* Item */}
                  <li className="cart-item d-flex">
                    {/* Item image */}
                    <p className="cart-item__image">
                      <a href="product.html">
                        <img
                          alt="Image"
                          data-sizes="auto"
                          data-srcset="assets/products/1/10a.jpg 400w,
                    assets/products/1/10a.jpg 800w"
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
                    <p className="cart-item__image">
                      <a href="product.html">
                        <img
                          alt="Image"
                          data-sizes="auto"
                          data-srcset="assets/products/1/11a.jpg 400w,
                    assets/products/1/11a.jpg 800w"
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
                    <p className="cart-item__image">
                      <a href="product.html">
                        <img
                          alt="Image"
                          data-sizes="auto"
                          data-srcset="assets/products/1/12a.jpg 400w,
                    assets/products/1/12a.jpg 800w"
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
                  <a
                    href="checkout.html"
                    className="header-cart__button header-cart__button--checkout"
                  >
                    Checkout
                  </a>
                  <a href="cart.html" className="header-cart__button">
                    View cart
                  </a>
                </div>
                {/* End Header cart action */}
              </div>
              {/* End header cart */}
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
