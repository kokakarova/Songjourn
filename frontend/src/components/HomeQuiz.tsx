import { Link } from "react-router-dom";

export type HomeQuizProps = {
  handleclick: () => void;
};

export const HomeQuiz = () => {
  // const [question, setQuestion] = useState<QuestionType>();
  
  return (
    <div className="flex-container">
      <div>Hi user</div>
      <div>We have a quiz for you</div>
      <div>Guess the song's origin country</div>
      <button /*onClick={props!.handleclick}*/>
        <Link to="/questions">Start quiz</Link>
      </button>
      <div>Each correct answer grants you 20 points</div>
    </div>
  );
}
