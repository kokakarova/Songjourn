import { useState } from "react";
import Question from "./Question";
import { Link } from "react-router-dom";

export default function Home() {
  const [newQuiz, setNewQuiz] = useState(false);

  const handleclick = () => {
    setNewQuiz(true);
  };

  return (
    <div className="flex-container">
      <div>Hi user</div>
      <div>We have a quiz for you</div>
      <div>Guess the song's origin country</div>
      <button onClick={handleclick}><Link to="/questions">Start quiz</Link></button>
      <div>Each correct answer grants you 20 points</div>
    </div>
  );
}
