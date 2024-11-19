import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);

  const singleService = data.find((service) => service.id == id);

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
  } = singleService;

  const handleFeedback = (e) => {
    e.preventDefault();

    const comment = e.target.feedback.value;
    const allComments = [...comments, comment];
    console.log(comment);
    setComments(allComments);

    e.target.feedback.value = "";
  };

  return (
    <div className="wrapper flex flex-col items-center justify-center space-y-12 py-10">
      <div className="card w-full max-w-3xl rounded-lg bg-base-100 shadow-xl">
        <figure className="h-96">
          <img
            src={image}
            alt={serviceName}
            className="h-full w-full bg-slate-300 object-contain object-center"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{serviceName}</h2>
          <p className="text-gray-500 text-sm">
            {category} | Rating: ⭐{rating}
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
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Age Group:</strong> {ageGroup}
          </p>
          <p>
            <strong>Skills Covered:</strong> {skillsCovered.join(", ")}
          </p>

          <div className="mt-5">
            <form onSubmit={handleFeedback} className="space-y-4">
              <textarea
                name="feedback"
                className="textarea textarea-bordered h-64 w-full resize-none focus:border-primary focus:outline-none"
                placeholder="Share Your feedback with us"
              ></textarea>
              <button className="btn-main w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="grid w-full max-w-3xl grid-cols-1  lg:grid-cols-2 gap-4">
        {comments.map((comment, idx) => (
          <div key={idx} className="space-y-2 rounded-lg border-2 p-4">
            <h2 className="text-xl font-medium">{user.displayName}</h2>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
