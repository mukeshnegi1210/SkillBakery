function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <img
              width="100"
              height="100"
              src="./images/svg/logo.svg"
              alt="logo"
            />
          </div>
          <ul className="footer__links">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="#ourCourse">Our Courses</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="https://blog.skillbakery.com/">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/">Help & Support</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright__content">
            <div className="social_media">
              <h3>FOLLOW US</h3>
              <ul>
                <li>
                  <a href="/" target="_blank" rel="noreferrer">
                    <img
                      width="100"
                      height="100"
                      src="./images/svg/gmail.svg"
                      alt="gmail"
                    />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noreferrer">
                    <img
                      width="100"
                      height="100"
                      src="./images/svg/linkedin.svg"
                      alt="linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/skillbakery"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="100"
                      height="100"
                      src="./images/svg/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/skillbakery"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="100"
                      height="100"
                      src="./images/svg/twitter.svg"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/Skillbakery"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="100"
                      height="100"
                      src="./images/svg/youtube.svg"
                      alt="youtube"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              © 2022-2023 SkillBakery Studio|
              <a href="return.html">Refund Policy</a>| All Rights Reserved
              <a href="https://idevtek.com">IDevTek</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
