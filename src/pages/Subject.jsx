// src/pages/Subject.jsx
import { Link, useParams } from "react-router-dom";
import { getSubjectMaterials } from "../lib/mdxLoader";

export default function Subject() {
  const { subject } = useParams();
  const chapters = getSubjectMaterials(subject);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">
        {subject} — Study Materials
      </h1>

      {chapters.length === 0 ? (
        <p>No materials found.</p>
      ) : (
        <div className="space-y-3">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              to={`/materials/${subject}/${c.slug}`}
              className="block border rounded-md px-4 py-3 hover:bg-gray-50"
            >
              {c.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
