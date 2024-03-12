import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="root-layout">
        <header> navbar</header>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
