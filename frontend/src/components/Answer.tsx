import { useEffect } from "react";

export type ModalProps = {
  answer: string;
  artist: string;
  track: string;
  albumCover: string;
  country: string;
};

export default function Answer(props: ModalProps) {
  var audioCorrect = new Audio("cartoon-sound-fx-oyeah_F_major.wav");
  var audioIncorrect = new Audio("cartoon-sound-fx-effect-shot-8_D_minor.wav");
  const Playit = () => {
    if (props.answer === "correct") {
      audioCorrect.play();
    } else if (props.answer === "incorrect") {
      audioIncorrect.play();
    }
  }
  useEffect(() => {
    Playit();
  },[])
  if (props.answer === "correct") {
    return (
      <div
        className="hero min-h-screen bg-cover bg-opacity-70"
        style={{ backgroundImage: "url(bg.png)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-cover">
          <div className="flex justify-center">
            <div className="card w-100 h-50 bg-base-100 shadow-xl m-3">
              <figure className="max-w-xs max-h-sm place-self-center">
                <img src="correct.png" />
              </figure>
              <div className="card-body flex-row">
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src={props.albumCover} />
                  </div>
                </div>
                <div className="flex-col">
                  <h2>That was </h2>
                  <h2 className="card-title">
                    {props.artist} - {props.track}
                  </h2>
                  <h2>From </h2>
                  <h2 className="card-title"> {props.country}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="hero min-h-screen bg-cover bg-opacity-70"
      style={{ backgroundImage: "url(bg.png)" }}
    >
      <div className="hero-overlay bg-opacity-60 bg-cover">
        <div className="flex justify-center">
          <div className="card w-100 h-50 bg-base-100 shadow-xl m-3">
            <figure className="max-w-xs max-h-sm place-self-center">
              <img src="incorrect.png" />
            </figure>
            <div className="card-body flex-row">
              <div className="avatar">
                <div className="w-32 rounded">
                  <img src={props.albumCover} />
                </div>
              </div>
              <div className="flex-col">
                <h2>That was </h2>
                <h2 className="card-title">
                  {props.artist} - {props.track}
                </h2>
                <h2>From </h2>
                <h2 className="card-title"> {props.country}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
