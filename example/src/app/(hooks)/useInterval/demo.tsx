import { useState } from "react";
import { useInterval } from "../../../../../use-react-hooks";

const Demo = () => {
  const [count, setCount] = useState(0);
  useInterval(() => setCount((c) => c + 1), 5000);

  return (
    <div>
      <div>Times function was called - {count}</div>
    </div>
  );
};

export default Demo;
