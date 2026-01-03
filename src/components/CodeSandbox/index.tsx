import React from "react";
import styles from "./styles.module.css";

interface CodeSandboxProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({ title, action, children }) => {
  return (
    <div className={styles.sandbox}>
      <div className={styles.header}>
        <span>{title}</span>
        {action}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default CodeSandbox;
