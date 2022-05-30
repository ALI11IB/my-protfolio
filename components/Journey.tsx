/* eslint-disable @next/next/no-img-element */
import React from "react";
const myJourney = [
  {
    id: 1,
    iconbox: "iconbox-s1 d-sm-flex align-items-center",
    iconcolor: "iconbox-icon color1",
    spanicon: "icon-designer",
    title: "Year 2017",
    text01: "Got my Bachelor Degree in Information ",
    text02: "Systems and Software Engineering.",
  },
  {
    id: 2,
    iconbox:
      "iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1",
    iconcolor: "iconbox-icon color2 color1",
    spanicon: "icon-designer",
    title: "Year 2018",
    text01: "Start working as FullStack developer",
    text02: "at Infostrategic, Dubai UAE.",
  },
  {
    id: 3,
    iconbox:
      "iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1",
    iconcolor: "iconbox-icon color3",
    spanicon: "icon-brand",
    title: "Year 2020",
    text01: "Start my Master degree, computer science",
    text02: "Syrian Virtual University.",
  },
  {
    id: 4,
    iconbox:
      "iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1",
    iconcolor: "iconbox-icon color4",
    spanicon: "icon-brand",
    title: "Year 2022",
    text01: "Start learning BlockChain, got two certificates from Coursera",
    text02: " in Smart Contracts, Decentrelized Applications",
  },
];
const Journey = () => {
  return (
    <section className="faq-one" id="journey">
      <img
        src="/assets/images/shapes/faq-shape-1.png"
        alt=""
        className="faq-one__shape-1"
      />
      <img
        src="/assets/images/shapes/faq-shape-2.png"
        alt=""
        className="faq-one__shape-2"
      />
      <img
        src="/assets/images/shapes/faq-shape-3.png"
        alt=""
        className="faq-one__shape-3"
      />
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <h3>My Journey</h3>
        </div>
        <div className="row position-relative z-index1">
          {myJourney.map((data) => (
            <div
              key={data.id}
              className="col-lg-9 animate-element wow delay5 fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className={data.iconbox}>
                <div className={data.iconcolor}>
                  <span className={data.spanicon} />
                </div>
                <div className="ct-is">
                  <h3 className="title mg-b21">{data.title}</h3>
                  <p className="lt-sp01">
                    {data.text01}
                    <br />
                    {data.text02}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Journey;
