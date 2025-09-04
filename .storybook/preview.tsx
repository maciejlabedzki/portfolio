import type { Preview } from '@storybook/react-webpack5';
import i18n from '../src/i18n';
import '../src/styles/index.css';
import '../src/styles/tailwind-base.css';

const preview: Preview = {
  parameters: {
    i18n,
    docs: {
      codePanel: true,
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
    locale: 'en',
    locales: {
      en: 'English',
      pl: 'Polish',
    },
  },
};

export default preview;
