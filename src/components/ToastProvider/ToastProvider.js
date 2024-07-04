import React from "react";

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

  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape" && toasts.length > 0) {
        setToasts([]);
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [toasts]);
  return (
    <ToastContext.Provider
      value={{ toasts, createToast, removeToast, setToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
