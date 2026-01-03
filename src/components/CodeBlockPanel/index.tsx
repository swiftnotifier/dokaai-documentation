import React from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";

interface CodeBlockPanelProps {
  title?: string;
  language?: string;
  children: string;
}

const CodeBlockPanel: React.FC<CodeBlockPanelProps> = ({
  title,
  language,
  children,
}) => {
  return (
    <div className={styles.panel}>
      {title && (
        <div className={styles.header}>
          <span className={styles.icon} aria-hidden="true" />
          <span className={styles.title}>{title}</span>
        </div>
      )}
      <div className={styles.body}>
        <CodeBlock language={language}>{children}</CodeBlock>
      </div>
    </div>
  );
};

export default CodeBlockPanel;
