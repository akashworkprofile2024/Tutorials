
/*
   A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
    
    Promise is an object 
*/

// CREATE PROMISE
// const promise1 = new Promise(function(res , reject){
//            //Do an async task
//            //DB calls , cryptogaphy , network
           
//            setTimeout(function(){
//                  console.log('Asyn task is Complete..');
//                  res();   //Connected with .then  in Consume Promise
//            },1000)
// })

// // CONSUME PROMISE
// promise1.then(function(){
//     console.log('Promise1 Consume\n\n')
// })




// PROMISE ONE SHOT THECNIC
// new Promise(function(res , reject){
//     setTimeout(function(){
//              console.log('Async Task 2')
//              res()
//     }, 1000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })





// 3RD PROMISE res Parameter
// const promise3 = new Promise(function(res,reject){
//      setTimeout(function(){
//            res({username: 'akashworkprofile2024' , email:'akashworkprofile@gmail.com' })             
//      } , 1000)     
// })
// promise3.then(function(fetchdetails){
//       console.log(fetchdetails,'\n\n')
// })




// 4th PROMISE   CHANNING
// const promise4 = new Promise(function(res,reject){
//     setTimeout(function(){
//          let error  = false
//            if(!error){
//                res({username:'Rahul' , password: '123'} );
//            }else{
//                reject("Error: Something Went Wrong");
//            }
//     },1000)
// }) ; promise4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//       console.log('The Promise is resolved or Rejected')
// })


// PROMISE5  consume using asyn function  // Error Handling

// const promise5 = new Promise(function(res , rej){
//        setTimeout(function(){
//             let error = true
//             if(!error){
//                 res({language:'Javascript' , password:'145'});
//             }else{
//                 rej('ERROR 404 JS NOT FOUND');
//             }
//        },1000) 
// })

// async function conpromise5(){
//     try{
//            const response =  await promise5;
//     console.log(response)
//     }catch(error){
//           console.log(error);
//     }
    
// }
// conpromise5();



// PROMISE6  Fetch data from Api sever 
// async function getallusers(){

//     try{
//          const response = await fetch('https://api.github.com/users/akashworkprofile2024')
        
//       const data = await response.json()
//       console.log(data)
//     }
//      catch(error){
//          console.log(error)
//     }     
// }
// getallusers();

// PROMISE6 fetch data .then .catch    2nd Method

fetch('https://api.github.com/users/akashworkprofile2024')
.then((res)=>{
    return res.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))


