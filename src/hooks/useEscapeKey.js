import React from "react";

function useEscapeKey(callback) {
  //   const memoizedCallback = React.useCallback(callback, [callback]);
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        callback(e);
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
}

export default useEscapeKey;
