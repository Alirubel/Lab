import { createContext, useContext, useRef } from "react";

const SectionContext = createContext(null);

export function SectionNumberProvider({ children }) {
  const counters = useRef({ h2: 0, h3: 0 });

  const nextH2 = () => {
    counters.current.h2 += 1;
    counters.current.h3 = 0;
    return `${counters.current.h2}`;
  };

  const nextH3 = () => {
    counters.current.h3 += 1;
    return `${counters.current.h2}.${counters.current.h3}`;
  };

  return (
    <SectionContext.Provider value={{ nextH2, nextH3 }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionNumbers() {
  return useContext(SectionContext);
}
