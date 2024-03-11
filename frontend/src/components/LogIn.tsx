import { loginEndpoint } from "../util";

export default function Login() {
  return (
    <>
    <h3>Welcome to Songjourn</h3>
      <a href={loginEndpoint}>
        <div className="login-page">Login </div>
      </a>
    </>
  );
}
