import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";

const Event = () => {
  const events = useLoaderData();
  console.log(events)
  
  return (
    <HelmetProvider>
      <div className="space-y-24 pb-24">
        <Helmet>
          <title>Services | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Banner
          title={"Upcoming Events"}
          desc={
            "Discover our latest events designed to empower your career journey. From workshops to conferences, explore opportunities to grow and connect with industry experts."
          }
          bg={"bg-interview"}
        ></Banner>

        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            events.map(singleEvent => <EventCard key={singleEvent.id} singleEvent={singleEvent}></EventCard>)
          }
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Event;
