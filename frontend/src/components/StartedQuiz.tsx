import { Link, Navigate, useLoaderData } from "react-router-dom";
import { QuestionType } from "../types";
import { getQuestions, getTrackPreview, incrementResult } from "../util";
import { useEffect, useState } from "react";
import Answer from "./Answer";

export let result = 0;

export default function StartedQuiz() {
  const question: QuestionType[] = useLoaderData() as QuestionType[];
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [answer, setAnswer] = useState<string>();
  const [trackPreviewLink, setTrackPreviewLink] = useState<string>();
  const [artist, setArtist] = useState<string>();
  const [trackTitle, setTrackTitle] = useState<string>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [albumcover, setAlbumCover] = useState<string>();
  const quizQuestion = questionNumber - 1;

  useEffect(() => {
    getTrackPreview(question[quizQuestion].spotifyId).then((data) => {
      setAlbumCover(data.album.images[0].url);
      setArtist(data.artists[0].name);
      setTrackTitle(data.name);
      setTrackPreviewLink(data.preview_url);
    });
  }, [questionNumber]);

  const evaluateAnswer = (e: string) => {
    const turnSet = questionNumber + 1;
    // setTrackPreviewLink("");
    if (e === question![quizQuestion].correctAnswer) {
      incrementResult(20);
      setAnswer("correct");
      setShowAnswer(true);
    } else {
      setAnswer("incorrect");
      setShowAnswer(true);
    }
    setTimeout(() => {
      setAnswer("");
      setQuestionNumber(turnSet);
      setShowAnswer(false);
    }, 5000);
  };
  if (questionNumber > 5) {
    return <Navigate to="/result" />;
  }
  if (answer === "correct" || answer === "incorrect") {
  }
  return (
    <>
      {showAnswer && (
        <Answer
          answer={answer as string}
          artist={artist as string}
          track={trackTitle as string}
          albumCover={albumcover as string}
          country={question![quizQuestion].correctAnswer}
        />
      )}
      {!showAnswer && (
        <>
          <div className="flex justify-center">
            <div className="card w-96 bg-base-100 md:shadow-xl lg:shadow-xl lg:bg-gradient-to-br">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Question {questionNumber}/5</h2>
                <h3 className="card-title">Where is this song from</h3>
              </div>
              <figure className="px-10 pt-10">
                <audio src={trackPreviewLink} controls className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center flex-col">
                <button
                  className="btn btn-base w-64 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl hover:from-pink-500 hover:to-yellow-500"
                  onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                  value={question![quizQuestion].option1}
                >
                  {question![quizQuestion].option1}
                </button>
                <button
                  className="btn btn-base w-64 h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-xl hover:from-pink-500 hover:to-yellow-500"
                  onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                  value={question![quizQuestion].option2}
                >
                  {question![quizQuestion].option2}
                </button>
                <button
                  className="btn btn-base w-64 h-14 bg-gradient-to-r from-indigo-500 to-sky-500 text-xl hover:from-pink-500 hover:to-yellow-500"
                  onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                  value={question![quizQuestion].option3}
                >
                  {question![quizQuestion].option3}
                </button>
                <button
                  className="btn btn-base w-64 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 text-xl hover:from-pink-500 hover:to-yellow-500"
                  onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                  value={question![quizQuestion].option4}
                >
                  {question![quizQuestion].option4}
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col items-center text-center my-10">
            <Link to="/result">
              <button className="btn btn-neutral w-64">Leave Quiz</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export const questionLoader = async () => {
  const res = await getQuestions();
  return res.json();
};
