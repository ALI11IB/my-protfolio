/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <section
      className="banner-one"
      id="banner"
      style={{
        backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`,
      }}
    >
      <img
        src="/assets/images/shapes/banner-shapes-1-1.png"
        alt=""
        className="banner-one__shape-1"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-2.png"
        alt=""
        className="banner-one__shape-2"
      />

      <img
        src="/assets/images/shapes/banner-shapes-1-4.png"
        alt=""
        className="banner-one__shape-4"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-5.png"
        alt=""
        className="banner-one__shape-5"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-6.png"
        alt=""
        className="banner-one__shape-6"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-7.png"
        alt=""
        className="banner-one__shape-7"
      />

      <div className="container">
        <img
          src="/assets/images/shapes/banner-shapes-1-3.png"
          alt=""
          className="banner-one__shape-moc-1"
        />
        <img
          src="/assets/images/mocs/me.png"
          alt=""
          className="banner-one__moc"
        />
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <h1>Hi, my name is</h1>
              <h1> Ali Ibrahem</h1>

              <p>
                A full stack developer with four years experience building and
                maintaining responsive websites, developing scalable web apps
                from scratch, with very good experience in bootstrap , material
                UI, plus modern libraries and frameworks, <br /> BlockChain
                developer
              </p>
              <a
                href="/assets/pdf/ALI's_Resume.pdf"
                target={"_blank"}
                className="thm-btn banner-one__btn scroll-to-target"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
