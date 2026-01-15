import { useCounter } from "./Counters";

export default function Algorithm({ title, id, children }) {
  const { next } = useCounter();
  const number = next("algorithm", id);

  return (
    <div className="my-6 border rounded p-4 bg-gray-50">
      <div className="font-semibold mb-2">
        Algorithm {number}: {title}
      </div>
      <pre className="text-sm overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}
