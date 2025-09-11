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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {},
    defaultTheme: "dark",
   Provider: ({ children }) => <>{children}</>,
  }),
];

export default preview;
