import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import userIcon from "../../assets/user.svg";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  // const [filterComments, setFilterComments] = useState([])
  const { user } = useContext(AuthContext);

  const singleService = data.find((service) => service.id == id);

  useEffect(() => {
    const arr = getLocalStorage()
    const specificArr = arr.filter(obj => obj.id == id)
    setComments(specificArr);
  }, [id]);

  const {
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
    location,
    ageGroup,
    skillsCovered,
  } = singleService;

  const handleFeedback = (e) => {
    e.preventDefault();
    const comment = e.target.feedback.value;

    const details = {
      id: id,
      name: user.displayName,
      photo: user.photoURL || userIcon, 
      comment: comment
    }

    console.log(details);
    const allComments = [...comments, details];
    setComments(allComments);
    setLocalStorage(allComments);

    Swal.fire({
      title: "Feedback Submitted",
      text: "Thank you for your feedback! We appreciate your input and will use it to improve our services.",
      icon: "success"
    });

    e.target.feedback.value = "";
  };

  console.log(comments);

  return (
    <HelmetProvider>
      <div className="wrapper flex flex-col items-center justify-center space-y-12 py-10">
        <Helmet>
          <title>Service Details | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="card w-full max-w-3xl rounded-lg bg-base-100 shadow-xl">
          <figure className="h-72">
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
                  className="textarea textarea-bordered h-24 w-full resize-none focus:border-primary focus:outline-none"
                  placeholder="Share Your feedback"
                ></textarea>
                <button className="btn-main w-full">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 lg:grid-cols-2">
          {comments.map((detail, idx) => (
            <div
              key={idx}
              className="flex gap-3 rounded-lg bg-white p-5 shadow-xl"
            >
              <div>
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src={detail?.photo}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-playfair text-xl font-medium tracking-wider">
                  {detail?.name}
                </h2>
                <p className="font-mulish">{detail?.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ServiceDetails;
