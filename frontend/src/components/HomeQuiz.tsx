import { Link } from "react-router-dom";

export type HomeQuizProps = {
  handleclick: () => void;
};

export const HomeQuiz = () => {
  // const [question, setQuestion] = useState<QuestionType>();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Hello there</h1>
          <p className="py-6">We have one quiz for you</p>
          <p className="py-6 text-2xl">Guess the song's origin country</p>
          <button className="btn btn-primary">
            <Link to="/questions">Start quiz</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
