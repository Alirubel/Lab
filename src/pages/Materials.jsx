// src/pages/Materials.jsx
import { Link } from "react-router-dom";

export default function Materials() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">
        IIT ISM Study Materials
      </h1>

      <p className="text-gray-600 mb-8">
        Coursework notes and explanations from my PhD coursework at IIT ISM Dhanbad.
      </p>

      {/* TWO CARDS */}
      <div className="grid gap-6 sm:grid-cols-2">
        
        {/* Coursework Subjects */}
        <div className="border rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4">
            Coursework Subjects
          </h2>

          <div className="space-y-3">
            <Link
              to="/materials/dl"
              className="block border rounded-md px-4 py-3 hover:bg-gray-50"
            >
              Deep Learning
            </Link>

            <Link
              to="/materials/nlp"
              className="block border rounded-md px-4 py-3 hover:bg-gray-50"
            >
              Natural Language Processing
            </Link>
          </div>
        </div>

        {/* Question Papers */}
        <div className="border rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4">
            Question Papers && Books
          </h2>

          <div className="space-y-3">
            <a
              href="/question-papers/nlp/NLP Book.pdf"
              target="_blank"
              className="block border rounded-md px-4 py-3 hover:bg-gray-50"
            >
              NLP Book
            </a>

            <a
              href="/question-papers/DL/2024-endsem.pdf"
              target="_blank"
              className="block border rounded-md px-4 py-3 hover:bg-gray-50"
            >
              DL Book
            </a>

            <a
              href="/question-papers/NLP/2023-midsem.pdf"
              target="_blank"
              className="block border rounded-md px-4 py-3 hover:bg-gray-50"
            >
              NLP – Mid Semester 2023
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
