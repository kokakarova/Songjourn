import { loginEndpoint } from "../util";

export default function Login() {
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="songjourn-full.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Songjourn</h1>
          <p className="py-6">
            To use this app you need to log in with a premium Spotify account
          </p>
          <a href={loginEndpoint}>
            <button className="btn btn-secondary">Login with Spotify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
