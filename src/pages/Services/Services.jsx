import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Services = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <HelmetProvider>
      <div className="space-y-24 pb-24">
        <Helmet>
          <title>Services | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Banner
          title={"Empowering Careers, One Step at a Time"}
          desc={
            "Our comprehensive services are designed to guide you through every phase of your career journey. From career assessments and skill-building workshops to resume crafting and interview preparation, we’re here to help you succeed. Discover how we can turn your ambitions into achievements!"
          }
          bg={"bg-interview"}
        ></Banner>

        <div className="wrapper grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data.map((service) => (
            <ServiceCard service={service} key={service.id}></ServiceCard>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Services;
