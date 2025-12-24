/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        icon: true,
        // svgo: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      include: ['src'],
      exclude: [
        'src/**/index.ts',
        'src/**/*.types.ts',
        'src/**/types.ts',
        'playground/**', // 排除 playground 开发测试文件
        'src/_shadcn/**', // 排除 shadcn/ui 组件
      ],
      reporter: ['text', 'lcov', 'html', 'clover', 'json'],
    },
  },
});
