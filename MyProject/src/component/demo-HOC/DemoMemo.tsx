import React, { useState } from "react";
import DemoReactMemo from "./DemoReactMemo";

const DemoMemo = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <DemoReactMemo />
    </div>
  );
};

export default DemoMemo;
