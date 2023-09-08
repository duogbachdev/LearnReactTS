import { useEffect } from "react";
import { useStore } from "./useStore";
import axios from "axios";

function useAutoDispatch(state: any, action: any) {
  switch (action.type) {
    case "fetchApi/pending":
      return { ...state, isloading: action.isloading };
    case "fetchApi/success":
    case "fetchApi/error":
      return {
        ...state,
        isloading: action.isloading,
        data: action.data,
        error: action.error,
      };
    default:
      return state;
  }
}

export function useFetchApi(api: any) {
  const [state, dispatch] = useStore(useAutoDispatch, {
    data: [],
    isloading: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      dispatch({
        type: "fetchApi/pending",
        isloading: true,
      });
      try {
        const { data } = await axios.get(api);

        dispatch({
          type: "fetchApi/success",
          isloading: false,
          data,
          error: null,
        });
      } catch (error) {
        dispatch({
          type: "fetchApi/error",
          isloading: false,
          data: [],
          error,
        });
      }
    })();
  }, [api]);

  return { ...state };
}
