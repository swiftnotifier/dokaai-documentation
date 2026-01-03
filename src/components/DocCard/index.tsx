import React from "react";
import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@site/src/components/ui/card";

interface DocCardProps {
  title: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
}

const DocCard: React.FC<DocCardProps> = ({
  title,
  text,
  imageSrc,
  imageAlt,
  actions,
}) => {
  return (
    <UiCard className="border-slate-200 bg-white shadow-sm">
      <CardContent className="flex flex-col gap-3 p-6">
        {imageSrc && (
          <img
            className="w-full rounded-xl border border-slate-200 bg-white"
            src={imageSrc}
            alt={imageAlt || title}
          />
        )}
        <CardTitle className="text-base">{title}</CardTitle>
        {text && <CardDescription className="text-slate-600">{text}</CardDescription>}
      </CardContent>
      {actions && <CardFooter className="px-6 pb-6 pt-0">{actions}</CardFooter>}
    </UiCard>
  );
};

export default DocCard;
