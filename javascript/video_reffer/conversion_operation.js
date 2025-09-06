let score = 33
console.log(`33 is ${typeof(score)}`)
let score1 = '55'
console.log(`55 is ${typeof(score1)}`)

let valein = Number(score1)
console.log(`55 convert to ${typeof(score)}`)

let valin = String(score)
console.log(`33 convert ${typeof(valin)}`)


let varlet = '33adb'
let varletcon = Number(varlet)
console.log(`33abc`,typeof varletcon)
console.log(`33abc store as`,varletcon) // NAN

let loggedin1 = 1
let loggedin0 = 0 
console.log(`1`,Boolean(loggedin1))
console.log(`0`,Boolean(loggedin0))

let emptyvar = ''
let nonemptyvar = 'Akash'

console.log(`EmptyVar; `, Boolean(emptyvar))
console.log(`Non-EmptyVar: `,Boolean(nonemptyvar))