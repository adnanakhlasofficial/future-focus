const Banner = ({title, desc, bg}) => {
    return (
        <div className={`min-h-[46rem] grid place-content-center ${bg} bg-cover bg-center text-center space-y-4 px-2`}>
            <h2 className="heading">{title}</h2>
            <p className="desc max-w-[40rem]">{desc}</p>
        </div>
    );
};

export default Banner;