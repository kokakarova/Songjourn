import { Link } from "react-router-dom";
import "../output.css";

export default function Navbar() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost text-xl text-secondary">Songjourn</a>
        </Link>
      </div>
    </div>
  );
}
