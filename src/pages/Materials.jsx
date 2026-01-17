import { Link } from "react-router-dom";
import { getMaterialsIndex } from "../lib/mdxLoader";

export default function Materials() {
  const materials = getMaterialsIndex();

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        IIT ISM Study Materials
      </h1>

      <p className="text-gray-700 mb-8">
        Coursework notes and explanations from my PhD coursework at IIT ISM Dhanbad.
      </p>

      <h2 className="text-xl font-semibold mb-4">Coursework Subjects</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {Object.keys(materials).map((subject) => (
          <Link
            key={subject}
            to={`/materials/${subject}`}
            className="border rounded-md px-4 py-3 hover:bg-gray-50"
          >
            {subject}
          </Link>
        ))}
      </div>
    </>
  );
}
