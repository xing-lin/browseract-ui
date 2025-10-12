import { addons } from 'storybook/manager-api';
import { create } from 'storybook/internal/theming';

const theme = create({
  base: 'light',
  brandUrl: 'https://www.npmjs.com/package/browseract-ui',
  brandTarget: '_blank',
  brandTitle: `BrowserAct UI`,
  brandImage:
    'https://img.shields.io/npm/v/browseract-ui.svg?label=browseract-ui',
});

addons.setConfig({
  theme,
});
