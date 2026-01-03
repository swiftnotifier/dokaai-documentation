import Link from "@docusaurus/Link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  bgColor?: string;
  icon?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  bgColor = "var(--ifm-background-surface-color)",
  icon = false,
}) => {
  return (
    <div className="clean-card" style={{ backgroundColor: bgColor }}>
      {icon && (
        <img
          src="/dokaai-documentation/img/commonIcon.svg"
          alt="Common Icon"
          className="w-8 h-8 mb-3"
        />
      )}
      <div className="clean-card__body">
        <h3 className="clean-card__title">{title}</h3>
        <p className="clean-card__text">{description}</p>
        <Link href={link} className="clean-button">
          <span>Learn more</span>
          <img
            src="/dokaai-documentation/img/arrow-right.svg"
            alt="Arrow icon"
            className="w-4 h-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
