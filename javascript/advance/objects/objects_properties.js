//  ACCESSING PROPERTIES
// const user={
//     fname:'Akash biswas'
// }
// console.log(user.fname)
// console.log(user['fname'])

// let  store = "fname";
// let name = user[store];
// console.log(name)


// ADDING NEW PROPERTIES
// const emp = {
//          name:'Akash',
//          country:'INDIA',
// }
// emp.state='West Bengal'   // new properties
// console.log(emp)


// PROPERTY DEFAULT VALUE 
// function person(fname , lname , country){
//            this.fname=fname,
//            this.lname=lname,
//            this.country=country
// }
// const p1 = new person('Akash' , "Biswas" , 'INDIA');
// const p2 = new person('Ronald' , 'Flemin' , 'USA')

// console.log(`person 1:`,p1)
// console.log(`person 2: ` , p2)


// DELETE PROPERTIES
// const person = {
//     fname:'Akash',
//     lname:'Biswas',
//     email:'akash@gmail.com'
// }
// // delete person.email
// delete person['email']
// console.log(person)



// NESTED OBJECTS:
// teachers_obj = {
//     name:'Rahul',
//     lname:'Segal',
     
//     subjects:{
//         sub1:'python',
//         sub2:'full stack',
//         sub3:'javascript',
//     }
// }
// console.log(`Professor : ${teachers_obj.name} Specialized On: ${teachers_obj.subjects.sub1} , ${teachers_obj.subjects.sub2}`)

// const p1 = "subjects";
// const p2 = "sub2";
// console.log(teachers_obj[p1][p2])



