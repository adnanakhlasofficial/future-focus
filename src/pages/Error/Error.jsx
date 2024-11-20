import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Not Found | Future Focus</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="bg-slate-100 flex h-screen flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-blue-gray mt-4 text-2xl font-semibold font-playfair tracking-wider">
          Oops! Page Not Found
        </h2>
        <p className="text-gray mt-2 text-center font-mulish">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/"
          className="mt-6 btn-main"
        >
          Go Back to Home
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default Error;
