import React, { Component, useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const toggleSideMenuOn = () => {
    document.querySelector(".side-menu__block")!.classList.toggle("active");
  };

  const mobileMenu = () => {
    //Mobile Menu Toggle
    let mobileNavContainer = document.querySelector(".mobile-nav__container")!;
    let mainNavContent = document.querySelector(
      ".main-nav__main-navigation"
    )!.innerHTML;
    mobileNavContainer.innerHTML = mainNavContent;

    document
      .querySelector(".side-menu__toggler")!
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block")!.classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    document
      .querySelector(".side-menu__close-btn")!
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block")!.classList.remove("active");
        e.preventDefault();
      });
  };

  return (
    <div>
      <header className="main-nav__header-one ">
        <nav
          className={
            sticky
              ? "header-navigation stricky stricked-menu stricky-fixed"
              : "header-navigation stricky"
          }
        >
          <div className="container">
            <div className="main-nav__main-navigation">
              <ul className="one-page-scroll-menu main-nav__navigation-box">
                <li className="current scrollToLink">
                  <Link href="/">Home</Link>
                </li>
                <li className="scrollToLink">
                  <Link href="#skills">Skills</Link>
                </li>
                <li className="scrollToLink">
                  <Link href="#projects">Projects</Link>
                </li>
                <li className="scrollToLink">
                  <Link href="#journey">My Journey</Link>
                </li>
                <li className="scrollToLink">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="main-nav__logo-box">
              <a
                href="#"
                className="side-menu__toggler"
                onClick={() => toggleSideMenuOn()}
              >
                <i
                  className="fa fa-bars"
                  // onClick={() => toggleSideMenuOn()}
                ></i>
              </a>
            </div>
            <div className="main-nav__right">
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
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
