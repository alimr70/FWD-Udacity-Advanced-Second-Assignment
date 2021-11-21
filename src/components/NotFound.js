import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <h2>Sorry, The requested question is not found!</h2>
        <Link to="/" className="btn">
          Go Home!
        </Link>
      </div>
    </>
  );
};

export default NotFound;
