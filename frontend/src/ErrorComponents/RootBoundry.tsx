import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ErrorDisplay from "./ErrorDisplay";
import Navbar from "../components/Navbar";

export default function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <>
          <Navbar />
          <ErrorDisplay message={"Page Not Found"} />
        </>
      );
    }

    if (error.status === 401) {
      return (
        <>
          <Navbar />
          <div>You aren't authorized to see this</div>
        </>
      );
    }

    if (error.status === 503) {
      return (
        <>
          <Navbar />
          <ErrorDisplay message={"Looks like our API is down"} />
        </>
      );
    }

    if (error.status === 418) {
      return (
        <>
          <Navbar />
          <ErrorDisplay message={"🫖"} />
        </>
      );
    }
  }
  return (
    <>
      <Navbar />
      <ErrorDisplay message={"Something went wrong"} />
    </>
  );
}
