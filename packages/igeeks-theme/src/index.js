import Theme from "./theme";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import { beforeSSRCategories } from "./common/config";

import { tagsHandler, homeCustomHandler, categoryHandler } from "./common/handler";

const igeeksTheme = {
  name: "igeeks-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      autoPreFetch: "all",
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        if (state.router.link === "/") {
          await Promise.all(
            Object.values(beforeSSRCategories).map((category) =>
              actions.source.fetch(`/category/${category.name}/`)
            )
          );
        }
      },
    },
  },
  libraries: {
    html2react: {
      processors: [image, iframe],
    },
    source: {
      handlers: [homeCustomHandler, categoryHandler, tagsHandler],
    },
  },
};

export default igeeksTheme;
