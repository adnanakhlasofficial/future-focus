import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Banner from "../Banner/Banner";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <Banner title={"Resume"} desc={"Resume is good"} bg={"bg-resume"}></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner title={"Recruitment"} desc={"Recruitment is good"} bg={"bg-recruitment"}></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner title={"Interview"} desc={"Inteview was awesome"} bg={"bg-interview"}></Banner>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
