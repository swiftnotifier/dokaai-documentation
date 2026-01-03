import React from "react";
import Button from "../Button";

interface CardProps {
  title: string;
  description: string;
  link: string;
  bgColor?: string;
  icon?: boolean | string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  bgColor = "var(--clean-card-bg)",
  icon = false,
}) => {
  const showIcon = icon === true || icon === "true";

  return (
    <div className="clean-card" style={{ backgroundColor: bgColor }}>
      {showIcon && (
        <img
          src="/dokaai-documentation/img/commonIcon.svg"
          alt="Common Icon"
          className="clean-card__icon"
        />
      )}
      <div className="clean-card__body">
        <h3 className="clean-card__title">{title}</h3>
        <p className="clean-card__text">{description}</p>
        <Button
          href={link}
          icon={
            <img
              src="/dokaai-documentation/img/arrow-right.svg"
              alt="Arrow icon"
              className="clean-button__icon"
            />
          }
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Card;
