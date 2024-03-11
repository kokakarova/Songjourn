import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { getQuestion } from "../util";
import { QuestionType } from "../types";
import Question from "./Question";


export type HomeProps = {
  handleclick: () => void;
};


export const Home = (props: HomeProps) => {
  // const [question, setQuestion] = useState<QuestionType>();
  

  return (
    <div className="flex-container">
      <div>Hi user</div>
      <div>We have a quiz for you</div>
      <div>Guess the song's origin country</div>
      <button onClick={props.handleclick}>
        <Link to="/questions">Start quiz</Link>
      </button>
      <div>Each correct answer grants you 20 points</div>
    </div>
  );
}
