import { Link } from "react-router-dom";
import { getResult, resetResult } from "../util";

export default function Result() {
  const handleClick = () => {
    resetResult();
  }
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(bg.png)"}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-5 text-3xl font-bold">
            Your score is {getResult()}/100
          </h2>
          <h1 className="mb-5 text-2xl">Thanks for playing</h1>
          <Link to="/questions">
            <button onClick={handleClick} className="btn btn-secondary m-1.5">New Quiz</button>
          </Link>
          <Link to="/">
            <button onClick={handleClick} className="btn btn-secondary m-1.5">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
