import { createContext, useContext, useRef } from "react";

const CitationContext = createContext(null);

export function CitationProvider({ children }) {
  const citations = useRef([]);
  const map = useRef({});

  const cite = (key) => {
    if (!(key in map.current)) {
      map.current[key] = citations.current.length + 1;
      citations.current.push(key);
    }
    return map.current[key];
  };

  return (
    <CitationContext.Provider value={{ cite, citations }}>
      {children}
    </CitationContext.Provider>
  );
}

export function useCite() {
  return useContext(CitationContext);
}
