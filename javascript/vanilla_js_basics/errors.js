try{
    let result = 10 /0
    console.log(`Result:   ${result}`)
    throw new Error(`Something went wrong`)
}catch(error){
    console.error(`An error occurred:  ${error.message}`)
}finally{
    console.log(`Finished Trying`)
}

