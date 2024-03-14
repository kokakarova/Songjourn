import { Link } from "react-router-dom";
import { result } from "./StartedQuiz";

export default function Result() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(eric-nopanen-8e0EHPUx3Mo-unsplash.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-5 text-5xl font-bold">
            Your score is {result}/100
          </h2>
          <h1 className="mb-5">Thanks for playing</h1>
          <Link to="/">
            <button className="btn btn-primary m-1.5">Home</button>
          </Link>
          <Link to="/homequiz">
            <button className="btn btn-primary m-1.5">New Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
