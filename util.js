import title from "title";

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "_")
    .replace(/^-+|-+$/g, "");
};

export const docusaurusDate = (val) => {
  let ye = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(val);
  let mo = new Intl.DateTimeFormat("en", {
    month: "2-digit",
  }).format(val);
  let da = new Intl.DateTimeFormat("en", {
    day: "2-digit",
  }).format(val);
  return `${ye}-${mo}-${da}`;
};

export const titleFromSlug = (slug) => {
  const titleString = slug
    .split("/")
    .slice(1)
    .join(" – ")
    .replace(/-/g, " ")
    .replace(/\.[^/.]+$/, "");
  return title(titleString);
};

export const getDocId = (doc) => {
  return doc
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(1)
    .join("/");
};

export const getDocPath = (doc) => {
  return doc.replace(/\.mdx?$/, "");
};

export const getPageRoute = (page) => {
  return page
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(2)
    .join("/");
};

export const getPath = (page) => {
  return page.replace(/\.mdx?$/, "");
};
