import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <h2>Welcome User</h2>
      <div>
        Currently we have a quiz feature ready. More goodies are comming soon
      </div>
      <button>
        <Link to="/homequiz">Go To Quiz</Link>
      </button>
    </>
  );
};
