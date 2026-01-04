import Link from "@docusaurus/Link";
import React from "react";

interface TagProps {
  label: string;
  href?: string;
  count?: number;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ label, href, count, className = "" }) => {
  const classes = ["clean-tag", href ? "clean-tag--link" : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{label}</span>
        {typeof count === "number" && (
          <span className="clean-tag__count">{count}</span>
        )}
      </Link>
    );
  }

  return (
    <span className={classes}>
      <span>{label}</span>
      {typeof count === "number" && (
        <span className="clean-tag__count">{count}</span>
      )}
    </span>
  );
};

export default Tag;
