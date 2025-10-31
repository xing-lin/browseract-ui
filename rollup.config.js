import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import postcssImport from 'postcss-import';
import tailwindcss from '@tailwindcss/postcss';

const packageJson = require('./package.json');

const commonPlugins = [
  svgr(),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json' }),
];

const commonPluginsWithTerser = [...commonPlugins, terser()];

const postcssPlugin = postcss({
  extensions: ['.css'],
  plugins: [postcssImport(), tailwindcss()],
  extract: true,
  minimize: true,
  sourceMap: true,
});

export default [
  // 主入口
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [...commonPluginsWithTerser, postcssPlugin],
    external: ['react', 'react-dom'],
  },
  // 客户端工具入口（如果需要）
  {
    input: 'src/utils/client/index.ts',
    output: [
      {
        file: 'dist/utils/client.js',
        format: 'cjs',
        sourcemap: true,
        banner: "'use client';",
      },
      {
        file: 'dist/utils/client.mjs',
        format: 'esm',
        sourcemap: true,
        banner: "'use client';",
      },
    ],
    plugins: [
      ...commonPlugins,
      terser({
        format: {
          comments: false,
          preamble: "'use client';", // 保留 'use client' 指令
        },
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // 类型定义 - 主入口
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
  // 类型定义 - 客户端工具
  {
    input: 'src/utils/client/index.ts',
    output: [{ file: 'dist/utils/client.d.ts' }],
    plugins: [dts.default()],
  },
];
