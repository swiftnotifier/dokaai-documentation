import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function TOC({ className, ...props }) {
  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <div className="toc-title">
        <span className="toc-title__icon" aria-hidden="true" />
        {translate({
          id: "theme.docs.toc.title",
          message: "On this page",
          description: "Heading for the table of contents",
        })}
      </div>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
