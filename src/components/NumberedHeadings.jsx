import { useSectionNumbers } from "./SectionNumbers";

export function H2({ children }) {
  const { nextH2 } = useSectionNumbers();

  return (
    <h2>
      <span className="mr-2 text-gray-400 font-normal">
        {nextH2()}
      </span>
      {children}
    </h2>
  );
}

export function H3({ children }) {
  const { nextH3 } = useSectionNumbers();

  return (
    <h3>
      <span className="mr-2 text-gray-400 font-normal">
        {nextH3()}
      </span>
      {children}
    </h3>
  );
}
