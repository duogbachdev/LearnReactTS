import React, { memo } from "react";

const DemoReactMemo = () => {
  console.log("re-render khong can thiet");
  return <div>DemoReactMemo</div>;
};

export default memo(DemoReactMemo); // toi uu hieu nang tranh viec component re-render ko can thiets
