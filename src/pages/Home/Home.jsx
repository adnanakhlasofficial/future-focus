import { Link, useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Testimonials from "../../components/Testimonials/Testimonials";
import About from "../../components/About/About";

const Home = () => {
  const services = useLoaderData();

  return (
    <HelmetProvider>
      <div className="space-y-24 pb-24">
        <Helmet>
          <title>Home | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <BannerSlider></BannerSlider>

        <section className="wrapper">
          <About></About>
        </section>

        <section className="wrapper space-y-8">
          <div className="space-y-4">
            <h2 className="section-title">Services</h2>
            <p className="section-desc">
              Our services are designed to guide you toward career success,
              offering personalized counseling, expert resources, and tools to
              help you achieve your professional aspirations with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.slice(0, 6).map((service) => (
              <ServiceCard service={service} key={service.id}></ServiceCard>
            ))}
          </div>
          <div className="grid place-items-center">
            <Link to="/services" className="btn-main w-40 text-center">
              View All
            </Link>
          </div>
        </section>

        <section className="wrapper">
          <Testimonials></Testimonials>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Home;
