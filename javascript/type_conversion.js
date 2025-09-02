console.log('5'+2)
console.log('5'-2)
console.log(true+2)
console.log(false+'2')
console.log(null+1)
console.log(undefined+1)



let obj={
    toString(){
        return '45';
    },
    valueOf(){
        return 10
    }
}

console.log(obj +1)

// Unary Operator
let y = '5'
let s = + y 
console.log(s)

let x = 'Akash'
let ss = + x
console.log(ss)

ee = 100 + 45
String(ee)
console.log(ee , typeof(ee))


// Converting Date and Number
d = new Date()
Number(d)
console.log(typeof(d))


xs = new Date()
xs.getTime()
console.log(xs)