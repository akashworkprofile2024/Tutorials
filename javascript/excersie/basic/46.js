// const variable = (receiver)=>{
//   if(receiver.startsWith('New') === true){
//     return receiver;
//   }else{
//     return  `blank`
//   }
// };console.log(variable("New York"))


const variable=(receiver)=>receiver.startsWith('New')  && receiver;
console.log(variable('New York'))