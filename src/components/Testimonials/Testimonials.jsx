import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="section-title">Inspiring Success Stories</h2>
        <p className="section-desc">
          Hear from individuals who achieved their career goals with Future
          Focus. Be inspired by their journeys and start yours today!{" "}
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {testimonial.map((singleTestimonial) => (
            <SwiperSlide key={singleTestimonial.id}>
              <TestimonialCard
                singleTestimonial={singleTestimonial}
              ></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
