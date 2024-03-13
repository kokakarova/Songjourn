import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { setClientToken } from "./util";
import Login from "./components/LogIn";
import { router } from "./router";
import "./output.css"

function App() {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash: string = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const extractedToken = hash.split("=")[1].split("&")[0];
      window.localStorage.setItem("token", extractedToken);
      setToken(extractedToken);
      setClientToken(extractedToken);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
