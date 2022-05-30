module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "always",
      [
        "lower-case", // default
        "camel-case", // camelCase
        "kebab-case", // kebab-case
        "pascal-case", // PascalCase
        "sentence-case", // Sentence case
        "start-case", // Start Case
      ],
    ],
    "type-enum": [
      2,
      "always",
      ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "edit"],
    ],
  },
};
