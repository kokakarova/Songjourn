import { QuestionType } from "../types";

export default function Question(props: QuestionType) {
  console.log("props.option1: ", props.option1)
  return (
    <>
      <div className="flex-container">
        <div>Question 1/5</div>
        <div> Where is this song from? </div>
        <button>{props.option1}</button>
        <button>{props.option2}</button>
        <button>{props.option3}</button>
        <button>{props.option4}</button>
      </div>
    </>
  );
}
