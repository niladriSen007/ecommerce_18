import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-indigo-800">
      <h1 className="text-8xl font-bold mb-4 text-white">404</h1>
      <p className="text-6xl t mb-8 text-white">Oops😥! Page not found</p>
     
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
