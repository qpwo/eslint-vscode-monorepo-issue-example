import { foo, wow } from 'dependency'

function baz() {
  return foo()
}

function cool() {
  return wow()
}

console.log(baz())
console.log(cool())
