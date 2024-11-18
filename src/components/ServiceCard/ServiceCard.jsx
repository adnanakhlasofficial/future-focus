import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
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
        <img src={image} alt={serviceName} className="h-60 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p className="text-sm text-gray-500">{category} | Rating: ⭐{rating}</p>
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
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Age Group:</strong> {ageGroup}
        </p>
        <p>
          <strong>Skills Covered:</strong> {skillsCovered.join(", ")}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link to={learnMore}>
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
