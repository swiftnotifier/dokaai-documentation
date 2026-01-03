import Link from "@docusaurus/Link";
import React from "react";

interface MethodProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Method: React.FC<MethodProps> = ({
  children,
  href,
  className = "",
}) => {
  const classes = ["clean-method", className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
};

export default Method;
