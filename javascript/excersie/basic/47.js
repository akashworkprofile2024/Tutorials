const variable = (reciever)=>{
  if(reciever.startsWith("p") === true && reciever.endsWith("p")){
    return reciever.slice(1,reciever.length -1)
  }else{
     return `P not present `
  }
};console.log(variable('popmyp'))