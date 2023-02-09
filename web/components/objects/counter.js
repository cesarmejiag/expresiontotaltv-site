import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const padZero = (number) => {
  if (!isNaN(number)) {
    return `000000${Math.ceil(number)}`.slice(-7);
  }
  return number;
};

export default function Counter({ from, to, speed, refreshInterval }) {
  const [value, setValue] = useState(from);

  // How many times to update the value, and how much to increment the value on each update
  const loops = Math.ceil(speed / refreshInterval);
  const increment = (to - from) / loops;

  useEffect(() => {
    let loopCount = 0;
    setValue(0);
    const timer = setInterval(() => {
      setValue((value) => value + increment);
      loopCount++;
      if (loopCount >= loops) {
        timer && clearInterval(timer);
      }
    }, refreshInterval);

    return () => {
      timer && clearInterval(timer);
    };
  }, [to]);

  return <span>{padZero(value)}</span>;
}

Counter.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  speed: PropTypes.number,
  refreshInterval: PropTypes.number,
};

Counter.defaultProps = {
  from: 0,
  to: 0,
  speed: 1000,
  refreshInterval: 100,
  decimals: 0,
};
