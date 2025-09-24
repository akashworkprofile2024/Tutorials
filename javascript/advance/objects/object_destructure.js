// OBJECT DESTRUCTURE
// const user={
//     username:'akash2000',
//     pass:'123456',
//     email:'akash@gmail.com'
// }

// // Destructure
// let {username,pass,email}=user;
// console.log(username , pass , email)





// SET OBJECT VALUE USING DESTRUCTURE
// const user={
//     username:'akash2000',
//     pass:'123456',
//     email:'akash@gmail.com'
// }
// console.log(user)
// let{username,pass,email,country='India'}=user;
// console.log(username , pass,email , country)




//  OBJECT PROPERTY ALIAS
// const emp={
//     fname:'john',
//     lastname:'Doe',
//     aged:50
// }

// Destructure
// let{fname:name , lastname:lname , aged:age} = emp;
// console.log(`Name: ${name}\nLastName:${lname}\nAge:${age}`)




// STRING DESTRUCTURE
// let name = 'python';

// let[a1,a2,a3,a4,a5,a6] = name
// console.log(a1)

// let lang = ['python' , 'java' , 'javascript'];
// let [lang1 , lang2 , lang3] = lang;
// console.log(`Lang1: ${lang1} , Lang2: ${lang2} , Lang3: ${lang3}`)
// let[lan1,,lan2]=lang; // Skipping  objects
// console.log(lan1 , lan2)



// Rest Property
// let arr = [10,20,30,40,50,60,70]
// const [a,b, ...rest] = arr;
// console.log(a , b, rest)



// DESTRUCTURE MAPS
// const course = new Map([
//     ['python',5000],
//     ['java',3000],
//     ['javascript',2000]
// ]);
// const [key , value]  =course
// console.log(key ,value)

// for(const [key ,value] of course){
//        let text = '';
//        text += key +" : "+value;
//        console.log(text)
// }




