import React from "react";
import ReactDOM from "react-dom";
const PortalDemo = () => {
  if (typeof document === "undefined") return <div></div>;
  const bodyElement = document.querySelector("#root");
  if (!bodyElement) {
    return null;
  }
  return ReactDOM.createPortal(<div>demo</div>, bodyElement);
};

export default PortalDemo;
