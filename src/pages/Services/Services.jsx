import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="space-y-24 pb-24">
      <Banner
        title={"Services"}
        desc={"Get All you Service"}
        bg={"bg-interview"}
      ></Banner>

      <div className="wrapper grid grid-cols-3 gap-6">
        {data.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
