import React from "react";
import { ErrorCauseBoundary, useThemeConfig } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";

type NavbarItemConfig = {
  type?: string;
  position?: string;
  [key: string]: unknown;
};

function useNavbarItems(): NavbarItemConfig[] {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.\n` +
                `Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n` +
                `${JSON.stringify(item, null, 2)}`,
              { cause: error },
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchItem = items.find((item) => item.type === "search");
  const navItems = leftItems.filter((item) => item.type !== "search");

  return (
    <div className="navbar__inner clean-navbar__inner">
      <div className="clean-navbar__top">
        <div className="clean-navbar__top-left">
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
        </div>
        <div className="clean-navbar__search">
          {searchItem ? (
            <NavbarItem {...searchItem} />
          ) : (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </div>
        <div className="clean-navbar__top-right">
          <NavbarColorModeToggle className="clean-navbar__color-toggle" />
          <NavbarItems items={rightItems} />
        </div>
      </div>
      <div className="clean-navbar__bottom">
        <div className="navbar__items clean-navbar__links">
          <NavbarItems items={navItems} />
        </div>
      </div>
    </div>
  );
}
