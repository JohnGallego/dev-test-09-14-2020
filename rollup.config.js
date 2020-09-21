import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import cleaner from 'rollup-plugin-cleaner';
import html2 from 'rollup-plugin-html2';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/main.js',
  output: {
    file: './dist/main.bundle.js',
    format: 'iife',
    name: 'bundle',
  },
  plugins: [
    // cleaner({
    //   targets: [
    //     './dist/'
    //   ]
    // }),
    postcss({
      extensions: ['.css'],
    }),
    nodeResolve({
      browser: true,
    }),
    html2({
      template: 'src/index.html',
      // inject: 'head',
      // externals: [
      //     { type: 'js', file: "file1.js", pos: 'before' },
      //     { type: 'js', file: "file2.js", pos: 'before' }
      // ]
    }),
    copy({
      targets: [{ src: 'src/assets/**/*', dest: 'dist/assets' }],
    }),
  ],
};
