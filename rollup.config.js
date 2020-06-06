import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const config = {
  input: 'dist/build/mod.js',
  plugins: [commonjs(), uglify()],
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: ['ffi', 'ref'],
}

export default config
