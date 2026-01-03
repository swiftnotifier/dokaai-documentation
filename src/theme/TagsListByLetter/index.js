import React from "react";
import { listTagsByLetters } from "@docusaurus/theme-common";
import Heading from "@theme/Heading";
import Tag from "@site/src/components/Tag";
import styles from "./styles.module.css";

function TagLetterEntryItem({ letterEntry }) {
  return (
    <article>
      <Heading as="h2" id={letterEntry.letter}>
        {letterEntry.letter}
      </Heading>
      <ul className="padding--none">
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag label={tag.label} href={tag.permalink} count={tag.count} />
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}

export default function TagsListByLetter({ tags }) {
  const letterList = listTagsByLetters(tags);
  return (
    <section className="margin-vert--lg">
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem key={letterEntry.letter} letterEntry={letterEntry} />
      ))}
    </section>
  );
}
