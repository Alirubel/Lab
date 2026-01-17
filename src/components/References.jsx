// src/components/References.jsx
import { useCite } from "./Citations";

export default function References({ items }) {
  const { order } = useCite();

  return (
    <section>
      <h2>References</h2>
      <ol className="list-decimal pl-6">
        {order.current.map((key) => (
          <li key={key} className="mb-2">
            {items[key]}
          </li>
        ))}
      </ol>
    </section>
  );
}
