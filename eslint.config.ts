// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";

// Import plugins
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configs from Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore patterns
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // Essential plugin settings
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      /* =====================
         Typescript rules
      ====================== */
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/consistent-type-imports": "warn",

      /* =====================
         React rules
      ====================== */
      "react/prop-types": "off",
      "react/no-unknown-property": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-children-prop": "off",
      "react/no-danger": "error",
      // Extra useful React rules from client config
      "react/jsx-boolean-value": "error",
      "react/self-closing-comp": "error",
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],

      /* =====================
         React Hooks rules
      ====================== */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* =====================
         General rules
      ====================== */
      "no-unused-vars": "off", // handled by TS rule
      "no-console": "off",
      "no-case-declarations": "off",
      curly: "error",
      eqeqeq: "warn",
      "consistent-return": "error",
      "no-constant-condition": "warn",
      "default-case": ["error", { commentPattern: "^no default$" }],
      "default-case-last": "error",

      // Prevent hard-coded colors and values (general, no MUI sx)
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/#[0-9a-fA-F]{3,8}/]",
          message:
            "No hard-coded hex colors; use Tailwind classes or CSS variables",
        },
        {
          selector: "Literal[value=/rgba\\(/]",
          message:
            "No hard-coded rgba colors; use Tailwind classes or CSS variables",
        },
        {
          selector: "Literal[value=/hsl\\(/]",
          message:
            "No hard-coded hsl colors; use Tailwind classes or CSS variables",
        },
        {
          selector: "TemplateLiteral[quasis.0.value.raw=/#[0-9a-fA-F]{3,8}/]",
          message:
            "No hard-coded hex colors in template literals; use Tailwind classes or CSS variables",
        },
      ],

      // Prevent dangerous relative imports
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
        },
      ],

      /* =====================
         Unused imports cleanup
      ====================== */
      "unused-imports/no-unused-imports": "warn",
    },
  },
];

export default eslintConfig;
