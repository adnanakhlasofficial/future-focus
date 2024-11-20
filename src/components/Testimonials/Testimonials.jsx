import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="section-title">Inspiring Success Stories</h2>
      <p className="section-desc">
        Hear from individuals who achieved their career goals with Future Focus.
        Be inspired by their journeys and start yours today!{" "}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 !mt-12">
        {testimonial.map((singleTestimonial) => (
          <TestimonialCard
            key={singleTestimonial.id}
            singleTestimonial={singleTestimonial}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
