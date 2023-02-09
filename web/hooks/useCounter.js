import { useState } from "react";

export default function useCounter(start = 0) {
  const [count, setCount] = useState(start);

  const increase = (value = 1) => setCount((count) => count + value);
  const decrease = (value = 1) => setCount((count) => count - value);

  return {
    count,
    increase,
    decrease,
  };
}
