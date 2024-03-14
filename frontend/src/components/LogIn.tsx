import { loginEndpoint } from "../util";

export default function Login() {
  return (
    <div
      className="hero min-h-screen bg-neutral"
      style={{ backgroundImage: "url(bg.png)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="songjourn-full.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex-col lg:m-11">
          <h1 className="text-5xl font-bold">Welcome to Songjourn</h1>
          <p className="py-6">
            To use this app you need to log in with a premium Spotify account
          </p>
          <a href={loginEndpoint}>
            <button className="btn btn-secondary place-self-center'">
              Login with Spotify
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
