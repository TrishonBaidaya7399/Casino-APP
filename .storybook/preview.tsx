import "@/app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {},
    defaultTheme: "light",
   Provider: ({ children }) => <>{children}</>,
  }),
];

export default preview;
