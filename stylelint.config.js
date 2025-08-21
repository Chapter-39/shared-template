// ESM config for Stylelint v16+
// Focus: SCSS support, no Prettier conflicts (formatting handled by Prettier)

/** @type {import('stylelint').Config} */
export default {
  reportNeedlessDisables: true,
  ignoreFiles: [
    "**/node_modules/**",
    "**/dist/**",
    "**/.idea/**",
    "**/.husky/**",
    "**/types/**",
  ],
  extends: [
    // Base standard rules
    "stylelint-config-standard",
    // SCSS-specific best practices
    "stylelint-config-standard-scss",
  ],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    // CSS keyword case is enforced by default; allow camelCase for text-rendering
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: ["text-rendering"],
      },
    ],
    // Allow unconventional selector lists that include at-rules used in SCSS context
    // Allow unconventional selector lists that include at-rules used in SCSS context (e.g., SCSS placeholders)
    "selector-type-no-unknown": [true, { ignoreTypes: ["/^%/", "from", "to"] }],
  },
};
