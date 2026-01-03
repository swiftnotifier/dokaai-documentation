import React from "react";
import styles from "./styles.module.css";

interface DocGridProps {
  columns?: 2 | 3;
  className?: string;
  children: React.ReactNode;
}

const DocGrid: React.FC<DocGridProps> = ({
  columns = 2,
  className = "",
  children,
}) => {
  const columnClass = columns === 3 ? styles.grid3 : styles.grid2;
  const classes = [styles.grid, columnClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};

export default DocGrid;
