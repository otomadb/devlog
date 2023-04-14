module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  quoteProps: "consistent",
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-svelte"),
    require.resolve("prettier-plugin-md-nocjsp"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      files: ["*.md", "*.mdx"],
      options: { parser: "markdown-nocjsp" },
    },
  ],
};
