import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    terser(),
  ]
}
