// const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    'storybook-react-i18next',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // staticDirs: ['..\\public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // check: false,
    // checkOptions: {},
    // skipCompiler: false,
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
  core: {
    builder: 'webpack5',
  },
  // webpackFinal: async (config) => {
  //   // config.module.rules
  //   //   .filter((rule) => rule.test?.test('.svg'))
  //   //   .forEach((rule) => (rule.exclude = /\.svg$/i));

  //   // // Add SVGR instead of the default SVG loader to enable react-style SVG imports in storybook
  //   // config.module.rules.push(
  //   //   {
  //   //     test: /\.svg$/,
  //   //     use: [
  //   //       {
  //   //         loader: '@svgr/webpack',
  //   //       },
  //   //       {
  //   //         loader: 'file-loader',
  //   //         options: {
  //   //           name: 'static/media/[path][name].[ext]',
  //   //         },
  //   //       },
  //   //     ],
  //   //     type: 'javascript/auto',
  //   //     issuer: {
  //   //       and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
  //   //     },
  //   //   },
  //   //   {
  //   //     test: /\.svg$/,
  //   //     type: 'asset/resource',
  //   //     issuer: {
  //   //       and: [/\.(css|scss)$/],
  //   //     },
  //   //   },
  //   // );

  //   // /**
  //   //  * Add support for alias-imports
  //   //  * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
  //   //  */
  //   // config.resolve.alias = {
  //   //   ...config.resolve?.alias,
  //   //   '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
  //   // };

  //   // /**
  //   //  * Fixes font import with /
  //   //  * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
  //   //  */
  //   // config.resolve.roots = [
  //   //   path.resolve(__dirname, '../public'),
  //   //   'node_modules',
  //   // ];

  //   config.output.publicPath = './';

  //   return config;
  // },
};
export default config;
