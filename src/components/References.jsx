import { useCite } from "./Citations";

export default function References({ items }) {
  const { citations } = useCite();

  return (
    <section>
      <h2>References</h2>
      <ol className="list-decimal pl-6">
        {citations.current.map((key) => (
          <li key={key} className="mb-2">
            {items[key]}
          </li>
        ))}
      </ol>
    </section>
  );
}
