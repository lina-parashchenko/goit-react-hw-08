import { Outlet } from "react-router-dom";
import App from "../App/App";

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
