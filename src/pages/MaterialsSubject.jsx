import { useParams, Link } from "react-router-dom";
import { mdxModules } from "../lib/mdxLoader";

export default function MaterialsSubject() {
  const { subject } = useParams();

  const chapters = Object.keys(mdxModules)
    .filter((path) => path.includes(`/materials/${subject}/`))
    .map((path) => {
      const slug = path.split("/").pop().replace(".mdx", "");
      return slug;
    });

  if (chapters.length === 0) {
    return <p>No materials found.</p>;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 capitalize">
        {subject} Materials
      </h1>

      <div className="grid gap-3 sm:grid-cols-2">
        {chapters.map((slug) => (
          <Link
            key={slug}
            to={`/materials/${subject}/${slug}`}
            className="border rounded-md px-4 py-3 hover:bg-gray-50 transition"
          >
            {slug.replace("-", " ")}
          </Link>
        ))}
      </div>
    </>
  );
}
