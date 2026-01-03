import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from "redocusaurus";
import dotenv from 'dotenv';
dotenv.config();
const MAIN_URL = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL;
const MARKETING_URL = process.env.NEXT_PUBLIC_MARKETING_WEBSITE_URL;

const config: Config = {
  title: "Dokkai Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/dokkai.svg",
  url: 'https://swiftnotifier.github.io',
  baseUrl: "/dokaai-documentation",
  organizationName: "swiftnotifier",
  projectName: "dokaai-documentation",
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
    [
    '@docusaurus/plugin-content-docs',
    {
      id: 'integrations', 
      path: 'integrations',
      routeBasePath: 'integrations',
      sidebarPath: require.resolve('./sidebarsIntegration.ts'),
      editUrl: 'https://swiftnotifier.github.io/dokaai-documentation/admin',
    },
  ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: 'docs',
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://swiftnotifier.github.io/dokaai-documentation/admin",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://swiftnotifier.github.io/dokaai-documentation/admin",
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
          }
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
      hideOnScroll: false,
      logo: {
        alt: "My Site Logo",
        src: "img/Logo.png",
      },
      items: [
        {
          to: "/",
          label: "Documentation",
          position: "left",
          activeBaseRegex:
            "^(?:/dokaai-documentation/(?!integrations|api|blog|openapi).*|/(?!dokaai-documentation/)(?!integrations|api|blog|openapi).*)",
        },
        { to: "/integrations", label: "Integrations", position: "left" },
        { to: "/api/", label: "API Reference", position: "left",
        },
        
        {
        type: 'search',
        position: 'left', // or 'left'
        className: 'clean-navbar__search-item',
       },
        {
        type: 'html',
        position: 'right',
        value: `
        <a href="${MARKETING_URL}/contact"
          target="_blank" rel="noopener noreferrer"
          class="clean-cta clean-cta--ghost">
          Request a Demo
        </a>
        <a href="${MAIN_URL}"
          target="_blank" rel="noopener noreferrer"
          class="clean-cta clean-cta--primary">
          Try for Free
        </a>
        `,
      },
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
