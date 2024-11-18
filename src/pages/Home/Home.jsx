import { Link, useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();

  return (
    <div className="space-y-24 pb-24">
      <BannerSlider></BannerSlider>

      <section className="wrapper space-y-8">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <ServiceCard service={service} key={service.id}></ServiceCard>
          ))}
        </div>
        <div className="grid place-items-center">
          <Link to="/services" className="btn-main w-40 text-center ">View All</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
