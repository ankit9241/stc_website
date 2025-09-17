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
  {
    rules: {
      // Allow quotes/apostrophes in text without escaping
      "react/no-unescaped-entities": "off",
      // Allow <img> usage (you can migrate gradually to next/image)
      "@next/next/no-img-element": "off",
      // Don't block on unused vars; warn instead and allow underscore-prefixed
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      // Allow any temporarily, but warn
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
