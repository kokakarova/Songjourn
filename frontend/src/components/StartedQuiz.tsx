import { Link, Navigate, useLoaderData } from "react-router-dom";
import { QuestionType } from "../types";
import { getQuestions, getTrackPreview } from "../util";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [albumcover, setAlbumCover] = useState<string>();

  useEffect(() => {
    getTrackPreview(question[questionNumber - 1].spotifyId).then((data) => {
      console.log(data);
      setAlbumCover(data.album.images[0].url);
      setArtist(data.artists[0].name);
      setTrackTitle(data.name);
      setTrackPreviewLink(data.preview_url);
    });
  }, [questionNumber]);

  const evaluateAnswer = (e: string) => {
    const turnSet = questionNumber + 1;
    if (e === question![questionNumber - 1].correctAnswer) {
      result += 20;
      setAnswer("correct");
      setShowModal(true);
    } else {
      setAnswer("incorrect");
      setShowModal(true);
    }
    setTimeout(() => {
      setAnswer("");
      setQuestionNumber(turnSet);
      setShowModal(false);
    }, 5000);
  };
  if (questionNumber > 5) {
    return <Navigate to="/result" />;
  }
  if (answer === "correct" || answer === "incorrect") {
  }
  return (
    <>
      {showModal && (
        <Answer
          answer={answer as string}
          artist={artist as string}
          track={trackTitle as string}
          albumCover={albumcover as string}
          country={question![questionNumber - 1].correctAnswer}
        />
      )}
      {!showModal && (
        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Question {questionNumber}/5</h2>
              <h3 className="card-title">Where is this song from</h3>
            </div>
            <figure className="px-10 pt-10">
              <audio src={trackPreviewLink} controls className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center flex-col">
              <button
                className="btn btn-primary w-64"
                onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                value={question![questionNumber - 1].option1}
              >
                {question![questionNumber - 1].option1}
              </button>
              <button
                className="btn btn-primary w-64"
                onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                value={question![questionNumber - 1].option2}
              >
                {question![questionNumber - 1].option2}
              </button>
              <button
                className="btn btn-primary w-64"
                onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                value={question![questionNumber - 1].option3}
              >
                {question![questionNumber - 1].option3}
              </button>
              <button
                className="btn btn-primary w-64"
                onClick={(e) => evaluateAnswer(e.currentTarget.value)}
                value={question![questionNumber - 1].option4}
              >
                {question![questionNumber - 1].option4}
              </button>
            </div>
          </div>
          <button className="btn btn-neutral w-64">
            <Link to="/result">Leave Quiz</Link>
          </button>
        </div>
      )}
    </>
  );
}

export const questionLoader = async () => {
  const res = await getQuestions();
  return res.json();
};
