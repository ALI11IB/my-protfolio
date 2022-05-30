/* eslint-disable @next/next/no-img-element */
import React from "react";

const Contact = () => {
  return (
    <section className="contact-one" id="contact">
      <img
        src="/assets/images/shapes/contact-shape-1.png"
        alt=""
        className="contact-one__shape-1"
      />
      <img
        src="/assets/images/shapes/contact-shape-2.png"
        alt=""
        className="contact-one__shape-2"
      />
      <img
        src="/assets/images/shapes/contact-shape-3.png"
        alt=""
        className="contact-one__shape-3"
      />
      <div className="container">
        <div className="block-title">
          <h3>Contact Me</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-one__content">
              <div className="contact-one__infos">
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-placeholder"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Addresss</h3>
                    <p>Tartous, Syria</p>
                  </div>
                </div>
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-message"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:ali.la.ibrahem@gmail.com">
                        ali.la.ibrahem@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-phone-call"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+963933030942">+963933030942</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-one__content">
              <div className="contact-one__infos">
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>LinkedIn</h3>
                    <p>
                      <a href="https://linkedin.com/in/ali-ibrahem">
                        https://linkedin.com/in/ali-ibrahem
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Twitter</h3>
                    <p>
                      <a href="https://twitter.com/Ali_Ibrahem11">
                        https://twitter.com/Ali_Ibrahem11
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Github</h3>
                    <p>
                      <a href="https://github.com/ALI11IB">
                        https://github.com/ALI11IB
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
