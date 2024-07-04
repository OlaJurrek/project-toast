import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, setToastList }) {
  function handleDismiss(id) {
    const nextToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(nextToastList);
  }
  return (
    <ol className={styles.wrapper}>
      {toastList.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
