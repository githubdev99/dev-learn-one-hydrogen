/* eslint-disable hydrogen/prefer-image-component */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {Suspense, useEffect} from 'react';

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function HomeSlider() {
  return (
    <div className="slider">
      {/* Slider js */}
      <div className="js-home-default-slider">
        {/* Slider item */}
        <div className="slider__item">
          {/* Container */}
          <div className="container container--type-2">
            {/* Slider number */}
            <div className="slider__number">
              {/* Active slider number */}
              <div className="slider__number-active">1</div>
              {/* End active slider number */}
              {/* Total sliders number */}
              <div className="slider__number-total">3</div>
              {/* End total sliders number */}
            </div>
            {/* End slider number */}
            {/* Second container for slider */}
            <div className="container">
              {/* Slider container */}
              <div className="slider__container">
                {/* Slider content */}
                <div className="slider__content">
                  {/* Slider tag */}
                  <div className="slider__tag js-slider-tag">New arrival</div>
                  {/* End slider tag */}
                  {/* Slider heading */}
                  <h2 className="slider__heading js-slider-heading text-[80px]">
                    Basic Colours Comeback
                  </h2>
                  {/* End slider heading */}
                  {/* Slider description */}
                  <div className="slider__description js-slider-description">
                    Less is more never out of date. In the last of this years,
                    basic colours will comeback, discover our collections and
                    choose your style
                  </div>
                  {/* End slider description */}
                  {/* Slider action */}
                  <div className="slider__action js-slider-action">
                    {/* Button */}
                    <div className="slider__button">
                      <a href="shop.html" className="third-button">
                        Shop now
                      </a>
                    </div>
                    {/* End button */}
                    {/* View lookbook */}
                    <div className="slider__view-lookbook">
                      <a
                        href="https://vimeo.com/45830194"
                        className="js-video-popup"
                      >
                        <i className="lnil lnil-play" />
                        <span>
                          View
                          <br />
                          lookbook
                        </span>
                      </a>
                    </div>
                    {/* End view lookbook */}
                  </div>
                  {/* Slider action */}
                </div>
                {/* End slider content */}
                {/* Slider image wrap */}
                <div className="slider__wrap-image">
                  {/* Slider background image */}
                  <div className="slider__bg-image" />
                  {/* End slider background image */}
                  {/* Slider image */}
                  <div className="slider__image js-slider-image">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/images/default/home_slider_1.png 631w,
                assets/images/default/home_slider_1.png 1262w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="lazyload"
                    />
                  </div>
                  {/* End slider image */}
                </div>
                {/* End slider image wrap */}
              </div>
              {/* End slider container */}
            </div>
            {/* End second container for slider */}
          </div>
          {/* End container */}
        </div>
        {/* End slider item */}
        {/* Slider item */}
        <div className="slider__item">
          {/* Container */}
          <div className="container container--type-2">
            {/* Slider number */}
            <div className="slider__number">
              {/* Active slider number */}
              <div className="slider__number-active">2</div>
              {/* End active slider number */}
              {/* Total sliders number */}
              <div className="slider__number-total">3</div>
              {/* End total sliders number */}
            </div>
            {/* End slider number */}
            {/* Second container for slider */}
            <div className="container">
              {/* Slider container */}
              <div className="slider__container">
                {/* Slider content */}
                <div className="slider__content">
                  {/* Slider tag */}
                  <div className="slider__tag js-slider-tag">
                    Trending items
                  </div>
                  {/* End slider tag */}
                  {/* Slider heading */}
                  <h2 className="slider__heading js-slider-heading text-[80px]">
                    Crossbody Belt Bags
                  </h2>
                  {/* End slider heading */}
                  {/* Slider description */}
                  <div className="slider__description js-slider-description">
                    Product by 100% polyurethane. &amp; 100% polyester, All
                    crossbody belt bags bring the usefuls and suit for your any
                    style
                  </div>
                  {/* End slider description */}
                  {/* Slider price from */}
                  <div className="slider__price js-slider-price">
                    {/* Start from */}
                    <div className="slider__price-start-from">Start from</div>
                    {/* End start from */}
                    {/* Price */}
                    <div className="slider__price-value">$59.00</div>
                    {/* End price */}
                  </div>
                  {/* End slider price from */}
                </div>
                {/* End slider content */}
                {/* Slider image wrap */}
                <div className="slider__wrap-image slider__wrap-image--type-2">
                  {/* Slider background image */}
                  <div className="slider__bg-image" />
                  {/* End slider background image */}
                  {/* Slider image */}
                  <div className="slider__image js-slider-image">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/images/default/home_slider_2.png 715w,
                assets/images/default/home_slider_2.png 1430w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="lazyload"
                    />
                  </div>
                  {/* End slider image */}
                </div>
                {/* End slider image wrap */}
              </div>
              {/* End slider container */}
            </div>
            {/* End second container for slider */}
          </div>
          {/* End container */}
        </div>
        {/* End slider item */}
        {/* Slider item */}
        <div className="slider__item">
          {/* Container */}
          <div className="container container--type-2">
            {/* Slider number */}
            <div className="slider__number">
              {/* Active slider number */}
              <div className="slider__number-active">3</div>
              {/* End active slider number */}
              {/* Total sliders number */}
              <div className="slider__number-total">3</div>
              {/* End total sliders number */}
            </div>
            {/* End slider number */}
            {/* Second container for slider */}
            <div className="container">
              {/* Slider container */}
              <div className="slider__container">
                {/* Slider content */}
                <div className="slider__content">
                  {/* Slider heading */}
                  <h2 className="slider__heading slider__heading-type-2 js-slider-heading text-[80px]">
                    Discount <span>50%</span>
                    Sunglasses
                  </h2>
                  {/* End slider heading */}
                  {/* Slider second heading */}
                  <h3 className="slider__second-heading js-slider-second-heading">
                    clip-on lens
                  </h3>
                  {/* End slider second heading */}
                  {/* Slider description */}
                  <div className="slider__description js-slider-description">
                    Over 50 items sunglasses ready for discount, available
                    in-stock, Grab it now!
                  </div>
                  {/* End slider description */}
                  {/* Slider action */}
                  <div className="slider__action js-slider-action">
                    {/* Button */}
                    <div className="slider__button">
                      <a href="shop.html" className="fourth-button">
                        Shop now
                      </a>
                    </div>
                    {/* End button */}
                  </div>
                  {/* Slider action */}
                </div>
                {/* End slider content */}
                {/* Slider image wrap */}
                <div className="slider__wrap-image slider__wrap-image--type-3">
                  {/* Slider background image */}
                  <div className="slider__bg-image" />
                  {/* End slider background image */}
                  {/* Slider image */}
                  <div className="slider__image js-slider-image">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/images/default/home_slider_3.png 776w,
                assets/images/default/home_slider_3.png 1552w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="lazyload"
                    />
                  </div>
                  {/* End slider image */}
                </div>
                {/* End slider image wrap */}
              </div>
              {/* End slider container */}
            </div>
            {/* End second container for slider */}
          </div>
          {/* End container */}
        </div>
        {/* End slider item */}
      </div>
      {/* End slider js */}
      {/* Slider nav */}
      <div className="slider__nav">
        {/* Slider nav container */}
        <div className="container container--type-2">
          {/* Slider prev */}
          <div className="slider__prev js-slider-prev">Prev</div>
          {/* End slider prev */}
          {/* Slider next */}
          <div className="slider__next js-slider-next">Next</div>
          {/* End slider next */}
        </div>
        {/* End slider nav container */}
      </div>
      {/* End slider nav */}
    </div>
  );
}
