const variable = (recievestr)=>{
    let storet = ''
    let storep = ''
    for(let x=0 ; x<recievestr.length;x++){
        if(recievestr[x] === "p"){
            storep += recievestr[x]
        }else if(recievestr[x] === "t"){
            storet += recievestr[x]
        }
    } 
    return storep.length === storet.length
};console.log(variable('paatpss'))