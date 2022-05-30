import React, { Component } from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollBtn: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false,
      });
    }
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
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
          onClick={this.scrollTop}
          className="scroll-to-target scroll-to-top"
          style={{ display: this.state.scrollBtn ? "block" : "none" }}
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
  }
}
