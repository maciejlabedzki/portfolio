/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['..\\public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   compilerOptions: {
    //     allowSyntheticDefaultImports: false,
    //     esModuleInterop: false,
    //   },
    //   // Filter out third-party props from node_modules except @mui packages.
    //   propFilter: (prop) =>
    //     prop.parent
    //       ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
    //       : true,
    // },
  },
};
export default config;
