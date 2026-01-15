import { useCounter } from "./Counters";

export function FigRef({ id }) {
  const { next } = useCounter();
  return <>Figure {next("figure", id)}</>;
}

export function TableRef({ id }) {
  const { next } = useCounter();
  return <>Table {next("table", id)}</>;
}

export function AlgoRef({ id }) {
  const { next } = useCounter();
  return <>Algorithm {next("algorithm", id)}</>;
}
