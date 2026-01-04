import React from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
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
  const { withBaseUrl } = useBaseUrlUtils();

  const resolveIconSrc = (value?: boolean | string) => {
    if (value === true || value === "true") {
      return withBaseUrl("/img/commonIcon.svg");
    }

    if (!value || value === "false") {
      return null;
    }

    if (typeof value !== "string") {
      return null;
    }

    const trimmed = value.trim();
    if (!trimmed || trimmed === "false") {
      return null;
    }

    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }

    if (trimmed.startsWith("/")) {
      return withBaseUrl(trimmed);
    }

    if (trimmed.includes("/")) {
      return withBaseUrl(`/${trimmed}`);
    }

    if (/\.(svg|png|jpg|jpeg|gif|webp)$/i.test(trimmed)) {
      return withBaseUrl(`/img/${trimmed}`);
    }

    return withBaseUrl(`/img/${trimmed}.svg`);
  };

  const iconSrc = resolveIconSrc(icon);
  const arrowIconSrc = withBaseUrl("/img/arrow-right.svg");

  return (
    <div className="clean-card" style={{ backgroundColor: bgColor }}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt={`${title} icon`}
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
              src={arrowIconSrc}
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
