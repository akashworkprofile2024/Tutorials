// // const firendsbook = new Object()
const firendsbook = {}
firendsbook.id = '1025ab'
firendsbook.name = 'Rahul'
firendsbook.islogin = false
console.log(firendsbook);

console.log('fetch-keys of Objects: ',Object.keys(firendsbook));
console.log('fetch-Values of Objects: ',Object.values(firendsbook));
console.log('fetch-Entries of Objects: ',Object.entries(firendsbook))
console.log(' Is firendsbook Own name Property: ', firendsbook.hasOwnProperty('name'))

// const regular_user = {
//     email:'rahul@gmail.com',
//     fullname:{
//         userfullname: {
//                   fname:'Rahul Kumar',
//         }
//     },
//     address:{
//         current_address:{
//             country:'India',
//             city:'Kolkata , Madhyamgram',
//             state:'West Bengal' 
//         }
//     }
// }

// console.log(`full Name: `, regular_user.fullname.userfullname.fname , `Live in: `, regular_user.address.current_address.city);


const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'c' , 4:'d'}
// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({ },obj1 , obj2)   // combine all elements in two different array

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id: 1,
        email:'a@gmail.com'
    }
]

