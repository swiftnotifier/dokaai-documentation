import Link from "@docusaurus/Link";
import React from "react";

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
  const sizeClass = size === "sm" ? "clean-button--sm" : "";
  const resolvedVariant =
    variant === "primary" ? "contained" : variant === "outline" ? "outlined" : variant;
  const disabledClass = disabled ? "is-disabled" : "";
  const classes = [
    "clean-button",
    `clean-button--${resolvedVariant}`,
    `clean-button--${tone}`,
    sizeClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

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
