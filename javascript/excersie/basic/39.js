const variable = (receiver)=>{
   if(receiver.length %2 == 0){
     const halfstr = receiver.length / 2;
     return receiver.slice(0,halfstr)
   } else{
     return "condition not fullfill / Try another string"
   }
};console.log(variable('pyt'))