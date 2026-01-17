import { useParams, Link } from "react-router-dom";
import { getSubjectMaterials } from "../lib/mdxLoader";
import { questionPapers } from "../data/questionPapers";


export default function MaterialsSubject() {
  const { subject } = useParams();
  const materials = getSubjectMaterials(subject);

  return (
    <section className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {subject} – Study Materials
      </h1>

      {/* ===== TWO CARDS LAYOUT ===== */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* 📘 Coursework Subjects (MDX) */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Coursework Subjects
          </h2>

          {materials.length === 0 ? (
            <p className="text-gray-500">No materials found.</p>
          ) : (
            <ul className="space-y-3">
              {materials.map((m) => (
                <li key={m.slug}>
                  <Link
                    to={`/materials/${subject}/${m.slug}`}
                    className="block p-4 border rounded-lg hover:bg-gray-50 transition"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 📝 Question Papers */}
<div className="border rounded-xl p-6">
  <h2 className="text-xl font-semibold mb-4">
    Question Papers
  </h2>

  {questionPapers[subject]?.length ? (
    <ul className="space-y-3">
      {questionPapers[subject].map((qp, i) => (
        <li key={i}>
          <a
            href={qp.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            📄 {qp.title}
          </a>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500">No question papers uploaded.</p>
  )}
</div>


      </div>
    </section>
  );
}
