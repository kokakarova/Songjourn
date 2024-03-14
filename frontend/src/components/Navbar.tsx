import { Link } from "react-router-dom";
import "../output.css";
import { resetResult } from "../util";

export default function Navbar() {
  const handleClick = () => {
    resetResult();
  }
  
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link to="/">
          <a onClick={handleClick} className="btn btn-ghost text-xl text-secondary">Songjourn</a>
        </Link>
      </div>
    </div>
  );
}
