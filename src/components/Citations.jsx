// src/components/Citations.jsx
import { createContext, useContext, useRef } from "react";

const CitationContext = createContext(null);

export function CitationProvider({ children }) {
  const counter = useRef(1);
  const map = useRef({});
  const order = useRef([]); // <-- track citation order

  const cite = (id) => {
    if (!map.current[id]) {
      map.current[id] = counter.current++;
      order.current.push(id);
    }
    return map.current[id];
  };

  return (
    <CitationContext.Provider value={{ cite, order }}>
      {children}
    </CitationContext.Provider>
  );
}

export function useCite() {
  const ctx = useContext(CitationContext);
  if (!ctx) {
    throw new Error("useCite must be used inside CitationProvider");
  }
  return ctx;
}
