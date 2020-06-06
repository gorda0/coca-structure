// @flow

export type User = {
  name: string,
}

export type NLib = {
  biggerThan?: Function,
  smallerThan?: Function,
  ...Object,
}
