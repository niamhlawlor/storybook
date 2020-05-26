module.exports = {
  stories: ["../src/stories/Intro.stories.mdx", "../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};
