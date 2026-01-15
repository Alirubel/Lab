import { useCite } from "./Citations";

export default function Cite({ id }) {
  const { cite } = useCite();
  const number = cite(id);

  return (
    <sup className="text-blue-700 cursor-pointer">
      [{number}]
    </sup>
  );
}
