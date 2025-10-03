const variable = (reciever)=>{
    return `Original:${reciever}\n${reciever.slice(-3)}${reciever.slice(0,-3)}`
    
};console.log(variable("python"))