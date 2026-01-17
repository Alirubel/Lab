// src/components/Cite.jsx
import { useCite } from "./Citations";

export default function Cite({ id }) {
  const ctx = useCite();

  // ✅ SAFETY GUARD
  if (!ctx) {
    console.warn("Cite used outside CitationProvider");
    return <sup>[{id}]</sup>;
  }

  const { cite } = ctx;
  const num = cite(id);

  return <sup>[{num}]</sup>;
}
