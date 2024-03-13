export type ModalProps = {
  answer: string;
  artist: string;
  track: string;
  albumCover: string;
  country: string;
};

export default function Answer(props: ModalProps) {
  console.log("Modal called");

  if (props.answer === "correct") {
    return (
      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <img src={props.albumCover} />
            <h2>That was </h2>
            <h2 className="card-title">
              {props.artist} - {props.track}
            </h2>
            <h2 className="className=" card-title>
              From {props.country}
            </h2>
          </div>
          <figure>
            <img src="correct.jpeg" />
          </figure>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <img src={props.albumCover} />
          <h2>That was </h2>
          <h2 className="card-title">
            {props.artist} - {props.track}
          </h2>
          <h2 className="card-title">From {props.country}</h2>
          <h2>From {props.country}</h2>
        </div>
        <figure>
          <img src="incorrect.jpeg" />
        </figure>
      </div>
    </div>
  );
}

// <div id="correct" className="modal">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Correct/Incorrect</h3>
//     <p className="py-4">
//       That was {props.artist} - {props.track}
//     </p>
//     <p className="py-4">From {props.country}</p>
//   </div>
// </div>
