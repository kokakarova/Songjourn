import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to Songjour</h1>
          <p className="py-6">
            Currently we have a quiz feature ready
          </p>
          <Link to="/homequiz">
            <button className="btn btn-secondary text-base">Go To Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
