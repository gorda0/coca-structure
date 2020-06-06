// @flow

import type { User } from '@types'
import nLib from '@nLib'

const user: User = {
  name: 'maico',
}

console.log(nLib)
console.log(nLib.biggerThan(1, 2)) // false
console.log(nLib.biggerThan(2, 2)) // false
console.log(nLib.biggerThan(3, 2)) // true
console.log(nLib.smallerThan(1, 2)) // true
console.log(user) // { name: "maico" }
