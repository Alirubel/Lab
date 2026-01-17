import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Materials", "/materials"],
    ["Research", "/research"],
    ["Evaluation", "/evaluation"],
    ["Experiments", "/experiments"],
    ["Tools", "/tools"],
    ["Publications", "/publications"],
    ["About", "/about"],
  ];

  return (
    <header className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="font-semibold text-lg">
          IIT ISM
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(([label, to]) => (
            <Link key={to} to={to} className="hover:underline">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden border-t bg-white">
          {links.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-center rounded-lg border border-gray-200 mx-4 my-0.5 bg-white hover:bg-gray-50 shadow-sm transition"

            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
