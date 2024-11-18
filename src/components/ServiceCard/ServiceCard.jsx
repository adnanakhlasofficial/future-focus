import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServiceCard = ({ service }) => {
  const {
    id,
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
    learnMore,
    location,
    ageGroup,
    skillsCovered,
  } = service;

  return (
    <div className="card rounded-lg bg-base-100 shadow-xl" data-aos="zoom-in-down">
      <figure>
        <img
          src={image}
          alt={serviceName}
          className="h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title">{serviceName}</h2>
        <p className="text-gray-500 itece flex gap-2 text-sm">
          {category} session
        </p>
        <p className="mt-2">{description}</p>
        <p className="mt-2">
          <strong>Price:</strong> {pricing}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Counselor:</strong> {counselor}
        </p>
        <p className="flex items-center gap-2">
          <strong>Rating:</strong>
          <ReactStars
            count={5}
            edit={false}
            value={rating}
            size={24}
            activeColor="#ffd700"
          />{" "}
          {rating}
        </p>
        <div className="card-actions mt-4 w-full">
          <Link className="w-full" to={`/service-details/${id}`}>
            <button className="btn-main block !w-full">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
