const arrnum = [20 , 30 , 400]

// for(let i=0 ; i<arrnum.length;i++){
//     const num = arrnum[i].toString();
//     let last = (num.length - 1)
//      if(num[last] === "0"){
//         console.log(`${num}`, true)
//      }else{
//         console.log(false)
//      }
// } 

const n1 = arrnum[0] % 10;
const n2 = arrnum[1] % 10;
const n3 = arrnum[2] % 10;

console.log( n1 === n2 && n2 === n3);