const a = new Set(['a','b','c'])
const b = new Set(['b','c','d'])
console.log(`Set Union`,a.union(b))


const x = new Set(['a','b','c'])
const y = new Set(['b','c','d'])
console.log(`Set Intersection`,x.intersection(y))


const c = new Set(['a','b','c'])
const r = new Set(['b','c','d'])
console.log(`Set Difference`,c.difference(r))


const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symmetricDifference(B);
console.log(`Set SymmetricDifference`,C)


const exe1 = new Set(['a','b','c']);
const exe2 = new Set(['b','c','d']);
let answer = exe1.isSupersetof(exe2);
console.log(answer)


const exe4 = new Set(['a','b','c']);
const exe5 = new Set(['b','c','d']);
let answer1 = exe4.isDisjointFrom(exe5);
console.log(answer1)