// const person={
//     fname:'Akash',
//     lname:"biswas",
//     id:4500,
//     details:function(){
//         return this.fname+"||"+this.lname+"||"+this.id
//     }
// };

// console.log(person.details())



// OBJECT METHOD BIND USING THIS
// const person={
//     fname:'Akash',
//     lname:"biswas",
//     id:4500,
//     details:function(){
//         return this;
//     }
// };
// console.log(person.details())   // Show Object






// EXPLICIT FUNCTION BINDING USING CALL() AND APPLY()
// const fetch = {
//    details: function(){
//         return `Name: ${this.fname} Lastname: ${this.lname}`;
//     }
// }
// const user = {
//      fname:'Rahul',
//      lname:'Segal',
// }
// const store = fetch.details.call(user)
// console.log(store)



// FUNCTION BORROW
// const fetch={
//     fname:' ',
//     lname:' ',
//     email:' ',
//     details:function(){
//          return `${this.fname} ${this.lname} ${this.email}`;
//     }
// }
// const emp={
//     fname:'Akash',
//     lname:'Biswas',
//     email:'akash@gmail.com'
// }
// const store = fetch.details.bind(emp)
// console.log(store()) // call the function , Here Borrow


