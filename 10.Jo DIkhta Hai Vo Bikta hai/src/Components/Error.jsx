import ErrorImage from "../Images/404 Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div>
      <img src={ErrorImage} alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="text-gray-800 text-xl pb-4">{err.data}</h3>
      <h3 className="text-orange-400 uppercase hover:text-orange-800">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;