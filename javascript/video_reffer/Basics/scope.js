// let a = 10
// const b = 20
// var c = 30

let a = 300   // Global Scope

if(true){
    let a = 10
    const b = 20
    console.log(`Inner Scope: ${a}`);
    
    
}

// console.log(a); // show error
// console.log(b); // show error
console.log(`Outer scope`,a); // No error