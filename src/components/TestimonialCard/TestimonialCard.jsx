const TestimonialCard = ({ singleTestimonial }) => {
  const { id, name, image, message } = singleTestimonial;

  return (
    <div className="card rounded-lg bg-base-100 p-4 shadow-xl">
      <figure className="mb-4">
        <img
          src={image}
          alt={name}
          className="mx-auto h-24 w-24 rounded-full object-cover object-center"
        />
      </figure>
      <div className="text-center">
        <h3 className="text-lg font-bold font-playfair">{name}</h3>
        <p className="text-gray font-mulish mt-2 text-sm max-w-72 mx-auto">{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
