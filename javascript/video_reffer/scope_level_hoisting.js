// function one(){
//     const username = 'Akash'
//     function two(){
//         const website = 'Youtube'
//         console.log(`${username}`);
//     }
//     // console.log(`${website}`);
//     two()
// }
// one()

// Here child function only access parent function




// if(true){
//     const username = 'Akash'
//     if(username === 'Akash'){
//         const website = 'Youtube'
//         console.log(` child sccope : ${username +' '+ website}`);
//     }
//      console.log(`Outter the child if scope: `,website);
// }

//  console.log(`Outer the parent if condition: `,username);




console.log(addone(5))
function addone(value){
      return value + 1
}


// Some times called expression
const addtwo=function(value){
    return value + 2
}
console.log(addtwo(5)) // hoisting error   if position change variable not found