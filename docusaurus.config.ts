import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from "redocusaurus";

const config: Config = {
  title: "Dokkai Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/dokkai.svg",
  url: "https://swiftnotifier.github.io/",
  baseUrl: "/dokaai-documentation/",
  organizationName: "DOKAAI",
  projectName: "Docs",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "http://localhost:4001" + "/admin/#/collections/doc",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus config
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "api/index.yaml",
            route: "/api/",
          },
          {
            spec: "https://redocly.github.io/redoc/openapi.yaml",
            route: "/openapi/",
          },
          {
            spec: "api/openai.yaml",
            route: "/rest-api",
          },
        ],
        theme: {
          primaryColor: "#1890ff",
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/dokkai.svg",
      },
      items: [
        { to: "/docs/", label: "Home", position: "left" },
        { to: "/rest-api", label: "Rest API", position: "left" },
        {
          to: "/api/",
          label: "API Playground",
          position: "left",
        },
        { to: "/sdk-libraries", label: "SDK Libraries", position: "left" },
        { to: "/changelog", label: "Changelog", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    algolia: {
      appId: "S0HH3FC2SS",
      apiKey: "f0eec5cc8676f09b5674a56977e6bd11",
      indexName: "movie",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
