import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Brands = () => {
  return (
    <section className="brand-one brand-one__home-one">
      <div className="container">
        <div className="brand-one__carousel">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="item">
              <img src="/assets/images/brand/brand-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-2.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-3.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-4.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-5.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-6.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-2.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-3.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-4.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-5.png" alt="" />
            </div>
            <div className="item">
              <img src="/assets/images/brand/brand-1-6.png" alt="" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Brands;
