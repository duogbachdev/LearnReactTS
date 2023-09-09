import React, { useEffect, useRef, useState } from "react";

const DemoRef = () => {
  const [color, setColor] = useState<string | undefined>(undefined);

  const inputRef = useRef<any>(null);

  const clickRef = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    console.log(inputRef.current);
    setColor("red");
  };
  return (
    <div>
      <p ref={inputRef}>bạn đã clicl lần</p>
      <input type="text" />
      <button onClick={clickRef}>click me </button>
    </div>
  );
};

export default React.memo(DemoRef);
