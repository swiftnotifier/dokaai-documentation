import React from "react";
import styles from "./styles.module.css";

interface DocHeroProps {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}

const DocHero: React.FC<DocHeroProps> = ({ eyebrow, title, text, children }) => {
  return (
    <section className={styles.hero}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
      {children && <div className={styles.actions}>{children}</div>}
    </section>
  );
};

export default DocHero;
