// function myname(){
//  console.log(`Formal Function: `);     
//  console.log('Akash')
//  console.log('Biswas')
// }

// myname() // function refference


// function add(n , n1){
//       console.log(n + n1) 
// }
// const result  = add(4 ,  45)

// console.log(`Result Value: ${result}`);




// function add(n , n1){
// //      let result = n + n1
// //      return result    // After result nothing will be print
//       return n + n1
// }
// const result  = add(4 ,  45)

// console.log(`Result Value: ${result}`);



function  loginmsg(username){
        if(username != undefined)
        {
              return `${username} logged in`
        }else{
            console.log('something gone wrong')
        }
        
}

console.log(loginmsg('Akash Biswas'))
console.log(loginmsg()) // Undefined passing 


