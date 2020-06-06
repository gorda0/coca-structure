// @flow
import * as ref from 'ref'
import * as ffi from 'ffi'
import type { NLib } from '@types'

const nativeLibs = ffi.Library('./native/target/release/libnative', {
  bigger_than: ['bool', ['int32', 'int32']],
  smaller_than: ['bool', ['int32', 'int32']],
})

const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const nLib: NLib = Object.keys(nativeLibs)
  .map(method => {
    return {
      [method
        .split('_')
        .map((str, i) => (i === 0 ? str : capitalize(str)))
        .join('')]: nativeLibs[method],
    }
  })
  .reduce((prev, curr) => ({ ...prev, ...curr }), {})

export default nLib
