// eslint.config.js (ESM)
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  // Ignore obvious directories
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".idea/**",
      ".husky/**",
      "types/**",
    ],
  },

  // Base JS rules
  js.configs.recommended,

  // Project-specific layer
  {
    files: ["**/*.{js,ts,jsx,tsx,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: { import: importPlugin },
    rules: {},
  },

  // Disable conflicts with Prettier (doesn't format, only avoids conflicts)
  prettier,
];
