export type ModalProps = {
  answer: string;
  artist: string;
  track: string;
  albumCover: string;
  country: string;
};

export default function Answer(props: ModalProps) {
  if (props.answer === "correct") {
    return (
      <div className="flex justify-center">
        <div className="card w-100 h-50 bg-base-100 shadow-xl">
          <figure className="max-w-xs max-h-sm place-self-center">
            <img src="correct.png"/>
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
    );
  }
  return (
    <div className="flex justify-center">
      <div className="card w-100 h-50 bg-base-100 shadow-xl">
        <figure className="max-w-xs max-h-sm place-self-center">
          <img src="incorrect.png"/>
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
  );
}
