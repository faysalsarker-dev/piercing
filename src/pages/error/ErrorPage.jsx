import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary mt-5">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
