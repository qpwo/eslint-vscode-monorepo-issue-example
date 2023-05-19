import { foo } from 'dependency'

function bar() {
  return foo()
}

console.log(bar())

const unused = 1 // check eslint is working
