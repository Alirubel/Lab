import { createContext, useContext, useRef } from "react";

const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const counters = useRef({
    figure: 0,
    table: 0,
    algorithm: 0,
    map: {}
  });

  const next = (type, id) => {
    if (id && counters.current.map[id]) {
      return counters.current.map[id];
    }

    counters.current[type] += 1;
    const value = counters.current[type];

    if (id) counters.current.map[id] = value;
    return value;
  };

  return (
    <CounterContext.Provider value={{ next }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
