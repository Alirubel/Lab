import { useCounter } from "./Counters";

export default function Figure({ src, caption, id }) {
  const { next } = useCounter();
  const number = next("figure", id);

  return (
    <figure className="my-6 text-center">
      <img src={src} alt={caption} className="mx-auto max-w-full" />
      <figcaption className="mt-2 text-sm text-gray-700">
        <strong>Figure {number}.</strong> {caption}
      </figcaption>
    </figure>
  );
}
