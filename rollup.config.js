import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

const libName = pkg.name;

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: `lib/${libName}.cjs.js`,
      format: 'cjs',
      name: libName,
    },
    {
      file: `lib/${libName}.esm.js`,
      format: 'es',
      name: libName,
    },
    {
      file: `lib/${libName}.umd.js`,
      format: 'umd',
      // 第三方模块，结合 external 使用
      globals: {
        'yoga-layout-prebuilt': 'yoga',
      },
      name: libName,
    }
  ],
  external: ['yoga-layout-prebuilt'],
  plugins: [
    babel(),
    typescript({
      sourceMap: false,
    }),
    resolve(),
    commonjs(),
    json(),
  ]
})
