import { Link } from "react-router-dom";

type ErrorDisplayProps = {
  message: string
}


export default function ErrorDisplay(props: ErrorDisplayProps) {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">{props.message}</h1>
          <Link to="/">
            <button className="btn btn-secondary m-8">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
