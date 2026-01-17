// src/pages/Article.jsx
import { useParams } from "react-router-dom";
import { getMaterial, getResearchPost } from "../lib/mdxLoader";

import { CitationProvider } from "../components/Citations";
import { CounterProvider } from "../components/Counters";
import { SectionNumberProvider } from "../components/SectionNumbers";

export default function Article() {
  const { subject, slug } = useParams();

  const mod = subject
    ? getMaterial(subject, slug)
    : getResearchPost(slug);

  if (!mod) {
    return <p className="text-red-600">Article not found.</p>;
  }

  const MDXContent = mod.default;

  return (
    <CitationProvider>
      <CounterProvider>
        <SectionNumberProvider>
          <article className="prose max-w-none">
            <MDXContent />
          </article>
        </SectionNumberProvider>
      </CounterProvider>
    </CitationProvider>
  );
}
