import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-2xl text-gray-800">404 Error Page not found</p>
        <h1 className="my-4 text-5xl font-bold text-red-500">Oops!</h1>
        <p className="mb-2 text-gray-700">
          The page you are looking for does not exist.
        </p>
        <p className="mb-8 text-gray-600">
          Don't panic, just click on the big button to go HOME!
        </p>
        <Link
          to={"/"}
          className="rounded bg-tripKoOrange px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
