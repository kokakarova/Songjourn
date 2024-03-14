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
import ErrorDisplay from "./ErrorComponents/ErrorDisplay";
import RootBoundary from "./ErrorComponents/RootBoundry";
import ErrorBoundary from "./ErrorComponents/ErrorBoundary";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<RootBoundary />}>
      <Route index element={<Welcome />}></Route>
      <Route
        path="/questions"
        element={<StartedQuiz />}
        loader={questionLoader}
        errorElement={<ErrorBoundary />}
      ></Route>
      <Route path="/result" element={<Result />}></Route>
      <Route path="*" element={<ErrorDisplay message={"Page Not Found"} />}></Route>
    </Route>
  )
);
