
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SectionNumberProvider } from "../components/SectionNumbers";
import { H2, H3 } from "../components/NumberedHeadings";
import { CitationProvider } from "../components/Citations";
import { CounterProvider } from "../components/Counters";

export default function Article() {
  const { slug } = useParams();
  const [MDXContent, setMDXContent] = useState(null);

  useEffect(() => {
    import(`../content/research/${slug}.mdx`)
      .then((mod) => setMDXContent(() => mod.default));
  }, [slug]);

  if (!MDXContent) return <p>Loading…</p>;

  return (
    <CounterProvider>
      <CitationProvider>
        <SectionNumberProvider key={slug}>
          <article className="
              prose prose-slate
              prose-base sm:prose-lg
              max-w-none
              prose-p:text-justify
              prose-p:leading-relaxed
              print:prose-base
            ">
            <MDXContent components={{ h2: H2, h3: H3 }} />
          </article>
        </SectionNumberProvider>
      </CitationProvider>
    </CounterProvider>
  );
}
