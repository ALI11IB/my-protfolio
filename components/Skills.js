/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const skills = [
  {
    id: "0",
    name: "Solidity",
    description: `is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.`,
    img: "/assets/images/skills/solidity.png",
  },
  {
    id: "1",
    name: "Web3.js",
    description: `is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.`,
    img: "/assets/images/skills/web3.jfif",
  },
  {
    id: "2",
    name: "JavaScript",
    description: ` is a scripting or programming language that allows you to implement complex features on web pages `,
    img: "/assets/images/skills/javascript.jpg",
  },
  {
    id: "3",
    name: "TypeScript",
    description: ` is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`,
    img: "/assets/images/skills/typescript.png",
  },
  {
    id: "4",
    name: "NodeJs",
    description: `is an asynchronous event-driven JavaScript runtime built on Chrome's V8 JavaScript engine, Node.js is designed to build scalable network applications.`,
    img: "/assets/images/skills/node.jfif",
  },
  {
    id: "5",
    name: "ReactJs",
    description: `React is a JavaScript library created by Facebook React is a User Interface (UI) library React is a tool for building UI components`,
    img: "/assets/images/skills/react.png",
  },
  {
    id: "6",
    name: "NextJs",
    description: `gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.`,
    img: "/assets/images/skills/next.jfif",
  },
  {
    id: "7",
    name: "MaterialUi",
    description: `MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.`,
    img: "/assets/images/skills/materialui.png",
  },
];
const SlideNextButton = () => {
  const swiper = useSwiper();
  //   useEffect(() => {
  //     swiper.slideTo(active, 5);
  //     console.log(active, "aaaa");
  //   }, [active]);
  return (
    <div className="ml-3" onClick={() => swiper.slideNext()}>
      <i className="zimed-icon-right-arrow"></i>
    </div>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <div className="ml-3" onClick={() => swiper.slidePrev()}>
      <i className="zimed-icon-left-arrow"></i>
    </div>
  );
};
const Testimonial = () => {
  const [active, setActive] = useState("0");
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="testimonials__one" id="skills">
      <img
        src="/assets/images/shapes/map-1-1.png"
        alt="Awesome Image"
        className="map-img"
      />
      <img
        src="/assets/images/shapes/testi-shape-1.png"
        alt=""
        className="testimonials__one-shape-1"
      />
      <img
        src="/assets/images/shapes/testi-shape-2.png"
        alt=""
        className="testimonials__one-shape-2"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="my-auto wow fadeInUp" data-wow-duration="1500ms">
              <div id="testimonials-slider-pager">
                <div className="testimonials-slider-pager-one">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      onClick={() => setActive(skill.id)}
                      className={`pager-item  ${
                        active === skill.id ? "active" : ""
                      }`}
                      data-slide-index={skill.id}
                    >
                      <img src={skill.img} alt={skill.name} />
                    </span>
                  ))}
                </div>
                <div className="testimonials-slider-pager-two">
                  {skills.map((skill) => (
                    <a
                      key={skill.id}
                      href="#"
                      className={`pager-item  ${
                        active === skill.id ? "active" : ""
                      }`}
                      data-slide-index={skill.id}
                    >
                      <img src={skill.img} alt={skill.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="block-title text-left">
              <span className="block-title__bubbles"></span>
              <h3>SKills</h3>
            </div>
            <ul className="slider testimonials-slider">
              <Swiper
                autoplay
                loop
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
              >
                {skills.map((skill) => (
                  <SwiperSlide key={skill.id} className={`swiper-slide `}>
                    {({ isActive }) => isActive && setActive(skill.id)}
                    <p>{skill.name}</p>

                    {skill.description}
                  </SwiperSlide>
                ))}

                <div className="testimonial_pagination">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
