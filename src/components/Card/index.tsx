import React from "react";
import Button from "../Button";
import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@site/src/components/ui/card";

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
    <UiCard className="border-slate-200 bg-white shadow-sm" style={{ backgroundColor: bgColor }}>
      <CardContent className="flex flex-col gap-3 p-6">
        {showIcon && (
          <img
            src="/dokaai-documentation/img/commonIcon.svg"
            alt="Common Icon"
            className="h-8 w-8"
          />
        )}
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          href={link}
          icon={
            <img
              src="/dokaai-documentation/img/arrow-right.svg"
              alt="Arrow icon"
              className="h-4 w-4"
            />
          }
        >
          Learn More
        </Button>
      </CardFooter>
    </UiCard>
  );
};

export default Card;
