import React, { useEffect, useState } from "react";

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const [initialNumber, setInitialNumber] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const end = start + 1000;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - start;

      if (elapsed < 1000) {
        const progress =
          initialNumber + (elapsed / 1000) * (targetNumber - initialNumber);
        setCount(Math.floor(progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber);
      }
    };

    setInitialNumber(count);
    requestAnimationFrame(updateCount);

    return () => {};
  }, [targetNumber]);

  return (
    <p className="counter">
      {count.toLocaleString()}
      <span>+</span>
    </p>
  );
};

export default Counter;
