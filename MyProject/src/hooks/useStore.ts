import { useState } from "react";

export const useStore = (store: any, initValue: any) => {
  const [state, setState] = useState(initValue);
  function dispatch(action: any) {
    const newState = store(state, action);
    setState(newState);
  }
  return [state, dispatch];
};
