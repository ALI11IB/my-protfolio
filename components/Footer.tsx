/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [scrollBtn, setScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrollBtn(true);
    } else if (window.scrollY < 70) {
      setScrollBtn(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <footer className="site-footer">
        <img
          src="/assets/images/shapes/footer-shape-1.png"
          className="site-footer__shape-1"
          alt=""
        />
        <img
          src="/assets/images/shapes/footer-shape-2.png"
          className="site-footer__shape-2"
          alt=""
        />
        <img
          src="/assets/images/shapes/footer-shape-3.png"
          className="site-footer__shape-3"
          alt=""
        />

        <div className="site-footer__bottom">
          <div className="container">
            <div className="inner-container">
              <div className="site-footer__social">
                <a
                  className="fab fa-linkedin"
                  href="https://linkedin.com/in/ali-ibrahem"
                  rel="noreferrer"
                  target={"_blank"}
                ></a>
                <a
                  className="fab fa-twitter"
                  href="https://twitter.com/Ali_Ibrahem11"
                  rel="noreferrer"
                  target={"_blank"}
                ></a>
                <a
                  className="fab fa-gitlab"
                  href="https://gitlab.com/ali.la.ibrahem"
                  rel="noreferrer"
                  target={"_blank"}
                ></a>
                <a
                  className="fab fa-github"
                  href="https://github.com/ALI11IB"
                  rel="noreferrer"
                  target={"_blank"}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        onClick={() => scrollTop()}
        className="scroll-to-target scroll-to-top"
        style={{ display: scrollBtn ? "block" : "none" }}
      >
        <i className="fa fa-angle-up"></i>
      </div>

      <div className="side-menu__block">
        <div className="side-menu__block-overlay custom-cursor__overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="side-menu__block-inner ">
          <div className="side-menu__top justify-content-end">
            <a href="#" className="side-menu__toggler side-menu__close-btn">
              <img src="assets/images/shapes/close-1-1.png" alt="" />
            </a>
          </div>

          <nav className="mobile-nav__container"></nav>
          <div className="side-menu__sep"></div>

          <div className="side-menu__content">
            <div className="side-menu__social">
              <a
                className="fab fa-linkedin"
                href="https://linkedin.com/in/ali-ibrahem"
                rel="noreferrer"
                target={"_blank"}
              ></a>
              <a
                className="fab fa-twitter"
                href="https://twitter.com/Ali_Ibrahem11"
                rel="noreferrer"
                target={"_blank"}
              ></a>
              <a
                className="fab fa-gitlab"
                href="https://gitlab.com/ali.la.ibrahem"
                rel="noreferrer"
                target={"_blank"}
              ></a>
              <a
                className="fab fa-github"
                href="https://github.com/ALI11IB"
                rel="noreferrer"
                target={"_blank"}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
