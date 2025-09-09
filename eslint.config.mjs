import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Essential rules from previous MUI ESLint config (adapted for no MUI)
  {
    rules: {
      // Custom TypeScript rules
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
      eqeqeq: "warn",

      // Custom React rules
      "react/prop-types": "off",
      "react/no-unknown-property": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-children-prop": "off",

      // General rules
      "no-unused-vars": "off",
      "no-console": "off",
      "no-case-declarations": "off",
      curly: "error",

      // Prevent hard-coded colors and values (general, no MUI sx)
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/#[0-9a-fA-F]{3,8}/]",
          message: "No hard-coded hex colors; use Tailwind classes or CSS variables",
        },
        {
          selector: "Literal[value=/rgba\\(/]",
          message: "No hard-coded rgba colors; use Tailwind classes or CSS variables",
        },
        {
          selector: "Literal[value=/hsl\\(/]",
          message: "No hard-coded hsl colors; use Tailwind classes or CSS variables",
        },
        {
          selector: "TemplateLiteral[quasis.0.value.raw=/#[0-9a-fA-F]{3,8}/]",
          message: "No hard-coded hex colors in template literals; use Tailwind classes or CSS variables",
        },
      ],

      // Prevent dangerous HTML
      "react/no-danger": "error",

      // Prevent deep relative imports
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../../*"],
              message: "Relative imports should not go up more than 2 levels. Use absolute imports with @/ instead.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;