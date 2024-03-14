import { Link } from "react-router-dom";

export type HomeQuizProps = {
  handleclick: () => void;
};

export const HomeQuiz = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">We have one quiz for you</h1>
          <p className="py-6 text-2xl">Guess the song's origin country</p>
          <Link to="/questions">
            <button className="btn btn-secondary">Start quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
