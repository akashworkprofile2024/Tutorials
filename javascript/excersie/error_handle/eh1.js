const variable = (receiver)=>{
     if(!Number.isInteger(receiver)){
          throw new Error("String Found")
     }

     return `${receiver} Integer-Perfect !!`
};
try{
    console.log(variable(5))
}catch(err){
    console.error("ERROR: " , err.message)
}

