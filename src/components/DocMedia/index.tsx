import React from "react";
import styles from "./styles.module.css";

interface DocMediaProps {
  src: string;
  alt: string;
  caption?: string;
}

const DocMedia: React.FC<DocMediaProps> = ({ src, alt, caption }) => {
  return (
    <figure className={styles.media}>
      <img className={styles.image} src={src} alt={alt} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

export default DocMedia;
