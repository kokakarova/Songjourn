import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { questionLoader } from "./components/StartedQuiz";
import { Welcome } from "./components/Welcome";
import RootLayout from "./layouts/RootLayout";
import StartedQuiz from "./components/StartedQuiz";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Welcome />}></Route>
      <Route
        path="/questions"
        element={<StartedQuiz />}
        loader={questionLoader}>
      </Route>
      <Route path="/result" element={<Result />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);
