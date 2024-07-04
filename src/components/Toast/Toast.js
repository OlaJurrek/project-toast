import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, children, variant = "notice" }) {
  const className = `${styles.toast} ${styles[variant]}`;
  const Icon = ICONS_BY_VARIANT[variant];
  const { removeToast } = React.useContext(ToastContext);
  return (
    <div className={className}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <VisuallyHidden>{variant} - </VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={() => removeToast(id)}
        aria-live="off"
        aria-label="Dismiss message"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
