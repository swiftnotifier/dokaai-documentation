import React from "react";
import styles from "./styles.module.css";

interface DocColumnsProps {
  children: React.ReactNode;
}

const DocColumns: React.FC<DocColumnsProps> = ({ children }) => {
  return <div className={styles.columns}>{children}</div>;
};

export default DocColumns;
