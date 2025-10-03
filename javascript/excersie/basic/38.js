const variable = (reciever)=>{
  let storage =  reciever.slice(3,reciever.length) 
  return (storage.repeat(4))
};console.log(variable("python"))