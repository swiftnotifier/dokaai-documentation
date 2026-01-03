import Link from "@docusaurus/Link";
import React from "react";
import { badgeVariants } from "@site/src/components/ui/badge";
import { cn } from "@site/src/lib/utils";

interface TagProps {
  label: string;
  href?: string;
  count?: number;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ label, href, count, className = "" }) => {
  const classes = cn(badgeVariants({ variant: "outline" }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{label}</span>
        {typeof count === "number" && (
          <span className="ml-2 rounded-full bg-slate-100 px-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-200">
            {count}
          </span>
        )}
      </Link>
    );
  }

  return (
    <span className={classes}>
      <span>{label}</span>
      {typeof count === "number" && (
        <span className="ml-2 rounded-full bg-slate-100 px-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-200">
          {count}
        </span>
      )}
    </span>
  );
};

export default Tag;
