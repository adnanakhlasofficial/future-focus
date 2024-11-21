import PropTypes from "prop-types";

const EventCard = ({singleEvent}) => {

    const { title, description, date, time, location, image } = singleEvent
  return (
    <div className="card rounded-lg bg-base-100 font-mulish transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl">
      <figure className="rounded-md rounded-b-none h-52">
        <img src={image} alt={title} className="h-full w-full object-cover object-center" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-playfair tracking-wider">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium">
            <span className="font-bold">Date:</span> {date}
          </p>
          <p className="text-sm font-medium">
            <span className="font-bold">Time:</span> {time}
          </p>
          <p className="text-sm font-medium">
            <span className="font-bold">Location:</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
    singleEvent: PropTypes.object
}

export default EventCard;
