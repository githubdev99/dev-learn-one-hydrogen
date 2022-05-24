/* eslint-disable hydrogen/prefer-image-component */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer(props) {
  return (
    <footer className="footer">
      {/* Container */}
      <div className="container container--type-2">
        {/* Row */}
        <div className="row">
          {/* First column */}
          <div className="col-lg-3 footer__first-column">
            {/* Footer logo */}
            <h5 className="footer__logo">{props.storeName}</h5>
            {/* End footer logo */}
            {/* Footer address */}
            <ul className="footer__address">
              <li>
                268 Elizaberth Ave Str, Brooklyn,
                <br />
                CA, 90025
              </li>
              <li>+0082 561 43 34</li>
              <li>
                <a href="mailto:support@devlearn.com">support@devlearn.com</a>
              </li>
            </ul>
            {/* End footer address */}
            {/* Footer socials */}
            <ul className="footer__socials">
              <li>
                <a href="https://twitter.com" target="_blank">
                  <i className="lnil lnil-twitter" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i className="lnil lnil-facebook" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <i className="lnil lnil-Instagram" />
                </a>
              </li>
            </ul>
            {/* End footer socials */}
          </div>
          {/* End first column */}
          {/* Second column */}
          <div className="col-lg-3 footer__second-column">
            {/* Footer heading */}
            <h6 className="footer__heading">FAQS</h6>
            {/* End footer heading */}
            {/* Footer menu */}
            <ul className="footer__menu">
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Gift Card</a>
              </li>
              <li>
                <a href="#">Guest purchase</a>
              </li>
              <li>
                <a href="#">Electronic receipt</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
            {/* End footer menu */}
          </div>
          {/* End second column */}
          {/* Third column */}
          <div className="col-lg-3 footer__third-column">
            {/* Footer heading */}
            <h6 className="footer__heading">Company</h6>
            {/* End footer heading */}
            {/* Footer menu */}
            <ul className="footer__menu">
              <li>
                <a href="#">About {props.storeName}</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Journals</a>
              </li>
            </ul>
            {/* End footer menu */}
          </div>
          {/* End third column */}
          {/* Fourth column */}
          <div className="col-lg-3 footer__fourth-column">
            {/* Footer heading */}
            <h6 className="footer__heading">Newsletter</h6>
            {/* End footer heading */}
            {/* Footer newsletter */}
            <form className="footer__newsletter">
              {/* Footer newsletter description */}
              <div className="footer__newsletter-description">
                Be the first to get the latest news about trends, promotions and
                much more!
              </div>
              {/* End footer newsletter description */}
              {/* Footer newsletter input */}
              <input
                type="email"
                className="footer__newsleter-input"
                placeholder="Enter your mail address"
              />
              {/* End footer newsletter input */}
              {/* Footer newsletter privacy policy */}
              <div className="footer__newsletter-privacy-policy">
                By subscribing, you accept the <a href="#">Privacy Policy</a>
              </div>
              {/* End footer newsletter privacy policy */}
              {/* Footer newsletter button */}
              <button
                type="submit"
                className="second-button footer__newsletter-button"
              >
                Subscribe
              </button>
              {/* End footer newsletter button */}
            </form>
            {/* End footer newsletter */}
          </div>
          {/* End fourth column */}
        </div>
        {/* End row */}
        {/* Copyright */}
        <div className="copyright">
          {/* Row */}
          <div className="row">
            {/* Copyright first column */}
            <div className="col-lg-3 copyright__first-column">
              © 2022 <span>{props.storeName}</span>.
              <small>Powered by Shopify</small>
            </div>
            {/* End copyright first column */}
            {/* Copyright second column */}
            <div className="col-lg-3 copyright__second-column">
              {/* Language switcher */}
              <ul className="copyright__language-switcher">
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
            </div>
            {/* End copyright second column */}
            {/* Copyright payments */}
            <div className="col-lg-6 copyright__payment flex justify-end">
              <span>Accept for</span>
              <img
                src="assets/images/default/payment.png"
                alt="Payment method"
              />
            </div>
            {/* End copyright payments */}
          </div>
          {/* End row */}
        </div>
        {/* End copyright */}
      </div>
      {/* End Container */}
    </footer>
  );
}
