// The from() Method
let arr = Int16Array.from("123456789")
let arr1 = Int32Array.from("123456789")
console.log(`Int16Array: ${arr}`)
console.log(`Int32Array: ${arr1}\n`)


// FILL method
let arr3 = [1,2,3,4,5,6]
let arr3cpy = arr3.toSpliced(arr3.length) // Copying array of Original array
console.log(arr3)
console.log(arr3cpy.fill(200))   //  modify original Array 
console.log(arr3cpy.fill(200,0,3),'\n')


// FIND METHOD on Number
let arr4 = [1,2,3,4,5,6]
let store;
if( store = arr4.find((x)=>x===2)){
    console.log(`Found: ${store}`)
}else{
    console.log("Not Found")
}

// FIND METHOD on String
let arr5 = ["Python" , "Css" , "Javascript"]
let store1;
if(store1 = arr5.find((y)=>  /javascript/i.test(y))){
    console.log(`Find method => String Found: ${store1}\n`)
}else{
    console.log(`Find Method => String Not Found\n`)
}


// Some Method
let arr6 = ["Python" , "Css" , "Javascript"]
console.log(`Some method`,arr6.some((x)=> /python/i.test(x)))
if((arr6.some((y)=>  /python/i.test(y))) === true){
    console.log(`Some :  String Found`)
}else{
    console.log(`String Not Found`)
}



