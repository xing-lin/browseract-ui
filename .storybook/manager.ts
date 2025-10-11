import { addons } from 'storybook/manager-api';
import { create } from 'storybook/internal/theming';
import { version } from '../package.json';

const theme = create({
  base: 'light',
  brandUrl: 'https://www.npmjs.com/package/browseract-ui',
  brandTarget: '_blank',
  brandTitle: `BrowserAct UI: V${version}`,
});

addons.setConfig({
  theme,
});
