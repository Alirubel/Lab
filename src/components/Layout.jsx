import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* NORMAL layout wrapper */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Outlet />
      </main>
    </>
  );
}
