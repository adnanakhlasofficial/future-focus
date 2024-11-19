import { Helmet, HelmetProvider } from "react-helmet-async";

const Error = () => {
  return (
    <HelmetProvider>
        <Helmet>
          <title>Page Not Found | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      <div>Path not found Adnan korse</div>
    </HelmetProvider>
  );
};

export default Error;
