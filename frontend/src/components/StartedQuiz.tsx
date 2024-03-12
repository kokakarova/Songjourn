import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { QuestionType } from "../types";
import { getQuestion, getTrackPreview } from "../util";
import { useEffect, useState } from "react";

export let result = 0;

export default function StartedQuiz() {
  const question: QuestionType[] = useLoaderData() as QuestionType[];
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [answer, setAnswer] = useState<string>();
  const [trackPreview, setTrackPreview] = useState<string>();

  useEffect(() => {
    getTrackPreview(question[questionNumber-1].spotifyId)
    .then(data => setTrackPreview(data.preview_url))
  }, [questionNumber])

  const evaluateAnswer = (e) => {
    const turnSet = questionNumber + 1;
    if (e === question![questionNumber - 1].correctAnswer) {
      result += 20;
      setAnswer("correct");
    } else {
      setAnswer("incorrect");
    }
    setTimeout(() => {
      setAnswer("");
      setQuestionNumber(turnSet);
    }, 2500);
  };
  if(questionNumber > 2) {
    return (
    <Navigate to="/result" />
    )
  }
  return (
    <div className="flex-container">
      <div>Question {questionNumber}/5</div>
      {answer === "correct" && <div> CORRECT </div>}
      {answer === "incorrect" && (
        <>
          <div> Wrong </div>
          <div>
            Correct answer was: {question![questionNumber - 1].correctAnswer}
          </div>
        </>
      )}
      <div> Where is this song from? </div>
      <audio src={trackPreview} controls></audio>
      <button
        className="button-answers"
        onClick={(e) => evaluateAnswer(e.currentTarget.value)}
        value={question![questionNumber - 1].option1}
      >
        {question![questionNumber - 1].option1}
      </button>
      <button
        className="button-answers"
        onClick={(e) => evaluateAnswer(e.currentTarget.value)}
        value={question![questionNumber - 1].option2}
      >
        {question![questionNumber - 1].option2}
      </button>
      <button
        className="button-answers"
        onClick={(e) => evaluateAnswer(e.currentTarget.value)}
        value={question![questionNumber - 1].option3}
      >
        {question![questionNumber - 1].option3}
      </button>
      <button
        className="button-answers"
        onClick={(e) => evaluateAnswer(e.currentTarget.value)}
        value={question![questionNumber - 1].option4}
      >
        {question![questionNumber - 1].option4}
      </button>
    </div>
  );
}

export const questionLoader = async () => {
  const res = await getQuestion();
  return res.json();
};
