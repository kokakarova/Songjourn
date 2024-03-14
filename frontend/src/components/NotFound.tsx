import { Link } from "react-router-dom";



export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">The page was not found</h1>
          <Link to="/">
            <button className="btn btn-secondary m-8">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
