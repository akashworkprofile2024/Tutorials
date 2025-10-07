function divide(a,b){
    if(b===0){
        throw new Error('Cannot divide by zero');
    }
    return `Result: ${a / b}` ;
}
try{
    console.log(divide(10,5))
}catch(err){
    console.error(`Caught an error:` , err.message);
}
