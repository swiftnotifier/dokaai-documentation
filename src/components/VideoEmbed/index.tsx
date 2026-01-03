import React from "react";
import styles from "./styles.module.css";

interface VideoEmbedProps {
  title: string;
  src: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ title, src }) => {
  return (
    <div className={styles.video}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
