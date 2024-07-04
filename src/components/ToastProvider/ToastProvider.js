import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(toast) {
    const nextToasts = [...toasts, toast];
    setToasts(nextToasts);
  }
  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
