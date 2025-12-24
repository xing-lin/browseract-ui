import path from 'node:path';
import { fileURLToPath } from 'node:url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJson = require('./package.json');

// 路径别名配置
const aliasConfig = {
  entries: [
    {
      find: '@',
      replacement: path.resolve(__dirname, './src'),
    },
  ],
};

// 外部依赖配置（不打包进产物）
const externalDeps = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'next',
  'next/link',
  'next/navigation',
  'tailwindcss',
  '@radix-ui/react-slot',
  'class-variance-authority',
  'lucide-react',
  'clsx',
  'tailwind-merge',
];

// 外部依赖判断函数（复用）
const isExternal = (id) =>
  externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`));

// 通用插件配置
const commonPlugins = [
  svgr(),
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: aliasConfig.entries,
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    declarationMap: false,
  }),
];

// DTS 插件配置（复用）
const dtsPlugin = dts.default({
  tsconfig: './tsconfig.json',
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/*': ['./src/*'],
    },
  },
});

export default [
  // 主入口 - 服务端组件
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [...commonPlugins, terser()],
    external: isExternal,
  },
  // 客户端入口
  {
    input: 'src/client/index.ts',
    output: {
      file: 'dist/client/index.mjs',
      format: 'esm',
      sourcemap: true,
      banner: "'use client';",
    },
    plugins: [
      ...commonPlugins,
      terser({
        format: {
          comments: false,
          preamble: "'use client';",
        },
      }),
    ],
    external: isExternal,
    onwarn(warning, warn) {
      // 忽略 'use client' 指令的警告
      // 因为我们已经在 output.banner 中正确添加了
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
  },
  // 类型定义 - 主入口
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types }],
    plugins: [dtsPlugin],
    external: [/\.css$/, ...externalDeps, isExternal],
  },
  // 类型定义 - 客户端入口
  {
    input: 'src/client/index.ts',
    output: [{ file: 'dist/client/index.d.ts' }],
    plugins: [dtsPlugin],
    external: [/\.css$/, ...externalDeps, isExternal],
  },
];
