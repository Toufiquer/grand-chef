import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        {" "}
        <img src="https://i.ibb.co/WpKWypn/food-4.jpg" alt="Slider Img" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://i.ibb.co/WpKWypn/food-4.jpg" alt="Slider Img" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://i.ibb.co/WpKWypn/food-4.jpg" alt="Slider Img" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://i.ibb.co/WpKWypn/food-4.jpg" alt="Slider Img" />{" "}
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
