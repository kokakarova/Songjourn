import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{ backgroundImage: "url(bg.png)" }}
    >
      <div className="hero-content text-center bg-white bg-opacity-90">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to Songjour</h1>
          <h1 className="text-2xl font-bold m-10">We have a quiz for you</h1>
          <Link to="/questions">
            <button className="btn btn-secondary text-1xl">
              Guess the origin country of the song
            </button>
          </Link>
          <p className="py-6 text-1xl">click to start the quiz</p>
        </div>
      </div>
    </div>
  );
};
