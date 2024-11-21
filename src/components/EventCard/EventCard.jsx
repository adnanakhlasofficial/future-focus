import PropTypes from "prop-types";

const EventCard = ({singleEvent}) => {

    const { title, description, date, time, location, image } = singleEvent
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium">
            <span>Date:</span> {date}
          </p>
          <p className="text-sm font-medium">
            <span>Time:</span> {time}
          </p>
          <p className="text-sm font-medium">
            <span>Location:</span> {location}
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
