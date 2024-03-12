import { Outlet, useLoaderData } from "react-router-dom";
import { QuestionType } from "../types";
import { getQuestion } from "../util";
import { useState } from "react";

export default function StartedQuiz() {
  const question: QuestionType[] = useLoaderData() as QuestionType[];
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  console.log(question);
  return (
      <div className="flex-container">
        <div>Question {questionNumber}/5</div>
        <div> Where is this song from? </div>
        <button className="button-answers">{question![1].option1}</button>
        <button className="button-answers">{question![1].option2}</button>
        <button className="button-answers">{question![1].option3}</button>
        <button className="button-answers">{question![1].option4}</button>
      </div>
  );
}

export const questionLoader = async () => {
  const res = await getQuestion();
  return res.json();
};
