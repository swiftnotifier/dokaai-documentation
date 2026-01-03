import Link from "@docusaurus/Link";
import React from "react";
import { buttonVariants } from "@site/src/components/ui/button";
import { cn } from "@site/src/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "outlined" | "contained" | "outline" | "primary";
  tone?: "primary" | "secondary";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = "",
  variant = "outlined",
  tone = "primary",
  size = "md",
  icon,
  type = "button",
  disabled = false,
  ...rest
}) => {
  const resolvedVariant =
    variant === "primary" ? "contained" : variant === "outline" ? "outlined" : variant;
  const shadcnVariant =
    resolvedVariant === "outlined"
      ? "outline"
      : tone === "secondary"
        ? "secondary"
        : "default";
  const sizeVariant = size === "sm" ? "sm" : "md";
  const secondaryOutline =
    tone === "secondary" && resolvedVariant === "outlined"
      ? "border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
      : "";
  const classes = cn(
    buttonVariants({ variant: shadcnVariant, size: sizeVariant }),
    "gap-2",
    secondaryOutline,
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} {...rest}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  if (href && disabled) {
    return (
      <span className={classes} aria-disabled="true">
        <span>{children}</span>
        {icon}
      </span>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      <span>{children}</span>
      {icon}
    </button>
  );
};

export default Button;
