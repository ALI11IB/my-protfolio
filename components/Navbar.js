import React, { Component } from "react";
import Link from "next/link";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    let mainNavContent = document.querySelector(
      ".main-nav__main-navigation"
    ).innerHTML;
    mobileNavContainer.innerHTML = mainNavContent;

    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    document
      .querySelector(".side-menu__close-btn")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
  };

  render() {
    return (
      <div>
        <header className="main-nav__header-one ">
          <nav
            className={
              this.state.sticky
                ? "header-navigation stricky stricked-menu stricky-fixed"
                : "header-navigation stricky"
            }
          >
            <div className="container">
              <div className="main-nav__logo-box">
                <a href="#" className="side-menu__toggler">
                  <i className="fa fa-bars"></i>
                </a>
              </div>
              <div className="main-nav__main-navigation">
                <ul className="one-page-scroll-menu main-nav__navigation-box">
                  <li className="current scrollToLink">
                    <a href="/">Home</a>
                  </li>
                  <li className="scrollToLink">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="scrollToLink">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="scrollToLink">
                    <a href="#journey">My Journey</a>
                  </li>
                  <li className="scrollToLink">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
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
  }
}
