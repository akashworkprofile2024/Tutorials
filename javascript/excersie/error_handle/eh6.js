const variable = (hold,index)=>{
    if(index < 0 || index >=hold.length){
          throw new RangeError("Out of Range")
    }
        return hold[index]
};try{
    const arr = [10,20,30]
    console.log(variable(arr , 5))
}catch(err){
    if(err instanceof RangeError){
        console.log('Range Error: ' , err.message)
    }else{
        console.log(`Other Range Error:` , err.message)
    }
}