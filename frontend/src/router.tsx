import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { questionLoader } from "./components/StartedQuiz";
import { Welcome } from "./components/Welcome";
import { HomeQuiz } from "./components/HomeQuiz";
import RootLayout from "./layouts/RootLayout";
import StartedQuiz from "./components/StartedQuiz";
import Result from "./components/Result";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Welcome />}></Route>
      <Route path="/homequiz/*" element={<HomeQuiz />}></Route>
      <Route
        path="/questions"
        element={<StartedQuiz />}
        loader={questionLoader}>
      </Route>
      <Route path="/result" element={<Result />}></Route>
    </Route>
  )
);
