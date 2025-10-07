const varia = (hold_data)=>{
    const store = eval(hold_data)
    if(store === false){
        throw new Error("Error Occur");
    }
    return store
};try{
    console.log(varia('akash + '))
}catch(err){
   if (err instanceof SyntaxError) {
        console.error("SyntaxError:", err.message);
    } else if (err instanceof EvalError){
        console.error("EvalError:", err.message);
    } else {
        console.error("Other Error:", err.message);
    }
}

