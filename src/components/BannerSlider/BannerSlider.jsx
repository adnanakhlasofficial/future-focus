import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from "../Banner/Banner";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper cursor-pointer"
      >
        <SwiperSlide>
          <Banner
            title={"Discover Your True Potential"}
            desc={
              "Unlock a personalized career path that matches your skills, interests, and dreams. Take the first step toward a brighter future today!"
            }
            bg={"bg-resume"}
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            title={"Guidance for Every Step"}
            desc={
              "From choosing the right career to mastering your interviews, we provide expert advice to help you succeed at every stage."
            }
            bg={"bg-recruitment"}
          ></Banner>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            title={"Shape Your Future with Confidence"}
            desc={
              "Explore opportunities, set goals, and achieve success with tailored career counseling designed just for you."
            }
            bg={"bg-interview"}
          ></Banner>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
