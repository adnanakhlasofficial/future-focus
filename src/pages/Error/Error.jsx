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

      <div className="flex h-screen flex-col items-center justify-center bg-slate-100">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-playfair text-2xl font-semibold tracking-wider text-blue-gray">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-center font-mulish text-gray">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn-main mt-6">
          Go Back to Home
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default Error;
