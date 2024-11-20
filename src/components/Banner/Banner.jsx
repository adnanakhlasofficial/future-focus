import PropTypes from "prop-types";

const Banner = ({ title, desc, bg }) => {
  return (
    <div
      className={`grid min-h-[46rem] place-content-center ${bg} space-y-4 bg-cover bg-center px-2 text-center`}
    >
      <h2 className="heading">{title}</h2>
      <p className="desc max-w-[40rem]">{desc}</p>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  bg: PropTypes.string,
};

export default Banner;
