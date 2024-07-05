import React from "react";

import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const toast = { message, variant, id: crypto.randomUUID() };
    const nextToasts = [...toasts, toast];
    setToasts(nextToasts);
  }
  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, removeToast, setToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
