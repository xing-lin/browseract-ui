import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, defineConfig, Plugin } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // https://github.com/storybookjs/storybook/issues/32428
  viteFinal: (config) =>
    mergeConfig(
      config,
      defineConfig({
        plugins: [fixStorybookMockerEntryPlugin()],
      }),
    ),
};
export default config;

function fixStorybookMockerEntryPlugin(): Plugin {
  return {
    name: 'fix-storybook-mocker-entry',
    enforce: 'post',
    transformIndexHtml(html) {
      // https://github.com/storybookjs/storybook/blob/2657cc33826d1abf76334f94fef4b82b10f1e1c0/code/core/src/core-server/presets/vitePlugins/vite-inject-mocker/plugin.ts#L11
      const entryPath = '/vite-inject-mocker-entry.js';
      return html.replace(`"${entryPath}"`, `".${entryPath}"`);
    },
  };
}
