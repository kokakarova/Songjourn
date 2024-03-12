import { result } from "./StartedQuiz";

export default function Result() {
  return (
    <>
      <div>Well Played!</div>
      <div>Your score is {result}/100</div>
    </>
  );
}
