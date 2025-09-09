import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import pluginTailwindcss from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Base configuration for all files
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      ".config/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "coverage/**",
      ".storybook/**",
      "storybook-static/**",
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },

    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "@typescript-eslint": tsPlugin,
      "@next/next": pluginNext,
      "jsx-a11y": pluginJsxA11y,
      import: pluginImport,
      tailwindcss: pluginTailwindcss,
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      tailwindcss: {
        config: "./tailwind.config.js",
        cssFiles: [
          "**/*.css",
          "!**/node_modules",
          "!**/.*",
          "!**/dist",
          "!**/build",
        ],
      },
    },

    rules: {
      // Base ESLint recommended rules
      ...pluginJs.configs.recommended.rules,

      // TypeScript ESLint recommended rules
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs["recommended-type-checked"].rules,

      // React recommended rules
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat["jsx-runtime"].rules,

      // React Hooks rules
      ...pluginReactHooks.configs.recommended.rules,

      // Next.js rules
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,

      // JSX A11y rules
      ...pluginJsxA11y.configs.recommended.rules,

      // Import rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/no-unused-modules": "warn",

      // Tailwind CSS v4 rules
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-arbitrary-value": "off", // Allow arbitrary values (common in v4)
      "tailwindcss/no-custom-classname": "off", // Allow custom classes for shadcn/ui and v4 custom properties
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/migration-from-tailwind-2": "off", // Not relevant for v4

      // Custom TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-floating-promises": "error",

      // Custom React rules
      "react/prop-types": "off", // TypeScript handles this
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/jsx-uses-react": "off", // Not needed in Next.js
      "react/no-unknown-property": "off",
      "react/no-children-prop": "off",
      "react/no-danger": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/no-direct-mutation-state": "error",
      "react/require-render-return": "error",

      // General rules
      "no-unused-vars": "off", // Handled by TypeScript
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-case-declarations": "off",
      curly: "error",
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",

      // Prevent hard-coded values that should use design tokens
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/#[0-9a-fA-F]{3,8}/]",
          message:
            "No hard-coded hex colors; use CSS variables or Tailwind classes",
        },
        {
          selector: "Literal[value=/rgba\\(/]",
          message:
            "No hard-coded rgba colors; use CSS variables or Tailwind classes",
        },
        {
          selector: "Literal[value=/hsl\\(/]",
          message:
            "No hard-coded hsl colors; use CSS variables or Tailwind classes",
        },
        {
          selector: "TemplateLiteral[quasis.0.value.raw=/#[0-9a-fA-F]{3,8}/]",
          message:
            "No hard-coded hex colors in template literals; use CSS variables or Tailwind classes",
        },
      ],

      // Prevent dangerous imports and enforce proper patterns
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../../*"],
              message:
                "Relative imports should not go up more than 2 levels. Use absolute imports with @/ instead.",
            },
          ],
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message:
                "Import React components individually or use namespace import.",
            },
          ],
        },
      ],

      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/no-unwanted-polyfillio": "error",
      "@next/next/no-page-custom-font": "error",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/mouse-events-have-key-events": "warn",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
    },
  },

  // Configuration for specific file types
  {
    files: ["**/*.config.{js,ts,mjs}"],
    rules: {
      "import/no-default-export": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },

  // Configuration for test files
  {
    files: [
      "**/*.test.{js,ts,jsx,tsx}",
      "**/*.spec.{js,ts,jsx,tsx}",
      "**/__tests__/**/*",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
    },
  },

  // Configuration for Storybook files
  {
    files: ["**/*.stories.{js,ts,jsx,tsx}"],
    rules: {
      "import/no-default-export": "off",
      "react/jsx-no-undef": "off",
    },
  },
];
