import { useCounter } from "./Counters";

export default function Table({ caption, id, children }) {
  const { next } = useCounter();
  const number = next("table", id);

  return (
    <div className="my-6">
      <div className="overflow-x-auto">{children}</div>
      <div className="mt-2 text-sm text-gray-700">
        <strong>Table {number}.</strong> {caption}
      </div>
    </div>
  );
}
