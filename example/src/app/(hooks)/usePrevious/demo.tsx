import { useState } from "react";
import { usePrevious } from "../../../../../use-react-hooks";

const Demo = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>Current Count is - {count}</div>
      <div>Previous Count is - {previousCount}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default Demo;
