const variable = (hold)=>{
    if(hold.length <= 5){
        throw new Error("Not Possible")
    }   
    return hold;
};try{
    console.log(variable('AkashB'))
}catch(error){
    console.error(`Result Catch: ${error.message}`)
}finally{
    console.error(`Finally End`);
}