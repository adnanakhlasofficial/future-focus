import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

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
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={serviceName}
          className="h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body">
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
        <div className="card-actions mt-4 justify-end">
          <Link to={`/service-details/${id}`}>
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
