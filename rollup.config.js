import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const libName = pkg.name;

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: `dist/${libName}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/${libName}.es.js`,
      format: 'es',
    },
    {
      file: `dist/${libName}.umd.js`,
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
    terser(),
  ]
})
