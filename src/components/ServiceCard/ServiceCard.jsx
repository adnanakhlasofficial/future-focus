import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
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
  } = service;

  return (
    <div className="card rounded-lg bg-base-100 font-mulish transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl lg:flex-row">
      <figure className="rounded-md rounded-b-none lg:w-1/2 lg:!rounded-r-none lg:rounded-b-md">
        <img
          src={image}
          alt={serviceName}
          className="h-full w-full object-cover object-center"
        />
      </figure>
      <div className="card-body p-6 lg:w-1/2">
        <h2 className="card-title font-playfair tracking-wider">
          {serviceName}
        </h2>
        <p className="text-gray-500 itece flex gap-2 text-sm bg-primary w-max text-base-300  rounded-full">
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
            size={20}
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

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
