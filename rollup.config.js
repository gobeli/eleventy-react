import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/pages/home.js',
  output: [
    {
      file: 'dist/home.js',
      format: 'cjs',
      exports: 'auto',
    },
  ],
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
};
