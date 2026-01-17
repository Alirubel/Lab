import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div
        className="
          max-w-4xl mx-auto
          px-4 sm:px-6
          py-3
          flex flex-wrap
          gap-x-5 gap-y-2
          text-xs sm:text-sm
          text-gray-700
        "
      >
        <Link
          to="/"
          className="font-semibold tracking-tight text-gray-900 text-sm sm:text-base"
        >
          Home
        </Link>

        <Link to="/materials">Materials</Link>
        <Link to="/research">Research</Link>
        <Link to="/evaluation">Evaluation</Link>
        <Link to="/experiments">Experiments</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
