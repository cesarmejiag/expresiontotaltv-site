import { useEffect, useReducer, useRef } from "react";

const initialState = {
  load: false,
  error: undefined,
  data: undefined,
};

export default function useFetch(url, options) {
  // Used to prevent state update if the component is unmounted.
  const cancelRequest = useRef(false);

  // Keep state logic separated.
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState, load: true };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the url is not given.
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        
        const data = await response.json();
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error });
      }
    };

    fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}
