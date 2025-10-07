const variable = (take)=>{
       if(take <0){
            throw new Error("Negative Value Found");
       }
       return take 
};try{
    console.log(variable(5))
}catch(error){
    console.error(`Result:`,error.message)
}