const Banner = ({title, desc, bg}) => {
    return (
        <div className={`min-h-[34rem] grid place-content-center ${bg} bg-cover bg-center text-center space-y-4`}>
            <h2 className="heading">{title}</h2>
            <p className="desc">{desc}</p>
        </div>
    );
};

export default Banner;