const variable = (reciever)=>{
    if(reciever.length %2===0 || reciever.length<3){
        return `String must  be odd length and at least 3 character long`; 
    }
    let mid  = Math.floor(reciever.length / 2);
    return reciever.slice(mid-1,mid+2)

};console.log(variable('AkashBiswas'))