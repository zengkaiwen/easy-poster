import path from 'path';

import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import fileSize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';

import pkg from './package.json';

const libName = pkg.name;
const isDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: path.resolve(__dirname, 'lib/'),
    format: 'umd',
    name: libName,
    sourcemap: isDevelopment,
    indent: false,
    banner: `
      /**
       * @license
       * EasyPoster v${pkg.version}
       * Copyright (c) 2019 Kevin.
       * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
       */
    `.trim(),
    globals: {
      'visual-yoga-layout-prebuilt': 'yoga',
    },
  },
  external: ['visual-yoga-layout-prebuilt'],
  plugins: [
    babel(),
    typescript(),
    resolve(),
    commonjs(),
    json(),
    progress(),
    replace({
      preventAssignment: true,
      values: {
        __BUILD_ENV__: process.env.NODE_ENV,
        __BUILD_VERSION_: pkg.version,
      },
    }),
    fileSize(),
    !isDevelopment &&
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
        },
      }),
  ],
});
