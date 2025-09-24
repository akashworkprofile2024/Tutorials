// CONSTRUCTOR OBJECT FOR EMP OBJECT
// function emp(fname ,lname , dept , country){
//         this.fname = fname
//         this.lname=lname
//         this.dept=dept
//         this.country=country
         
// }
// // NORMAL FETCH DATA
// const vpass = new emp('Akash' , "Biswas" , 'System admin' , 'INDIA')
// console.log(`FullName: ${vpass.fname + ' '+ vpass.lname}\nDept: ${vpass.dept}\nCountry: ${vpass.country}`)
// // FETCH DATA BY OBJECT ENTRIES
// for(let[key , value]  of Object.entries(vpass)){
//         console.log(key , value)
// }



// THROUGH MULTIPLE DATA ENTIRES
// function emp(fname ,lname , dept , country){
//         this.fname = fname
//         this.lname=lname
//         this.dept=dept
//         this.country=country
//         // this.domain='IT'  
// }
// // NORMAL FETCH DATA
// const vpass1 = new emp('Akash' , "Biswas" , 'System admin' , 'INDIA')
// const vpass2 = new emp('Mick' , "Jones" , 'Developer' , 'USA')
// const vpass3 = new emp('Sakura' , "Moto" , 'Cheif Engineer' , 'JAPAN')

// // FETCH DATA BY OBJECT ENTRIES
// // vpass1.domain='IT'; 

// const allemp = [vpass1,vpass2,vpass3];

// for( let emp of allemp){
//     for(let[key , value] of Object.entries(emp)){
//            console.log(`${key} : ${value}`)
//     } 
// }



// CONSTRUCTOR FUNCTION METHOD
// function person(fname , lname , email , id){
//     this.fname = fname
//     this.lname=lname
//     this.email=email
//     this.id=id
//     this.fullname=function(){
//         return this.fname+" "+this.lname
//     }
// }
// const per1 = new person("Akash" , 'Biswas' , 'akash@gmail.com' , 14526)
// console.log(per1.fullname())






// ADDING A METHOD TO A CONSTRUCTOR
// function person(fname,lname,id){
//     this.fname=fname;
//     this.lname=lname;
//     this.id=id;
// }
// const passvalue = new person('Akash' , 'Biswas' , 154422)
// console.log(passvalue)
// person.prototype.changename = function(name){
//     this.lname=name;
// }
// // change lname
// passvalue.changename('Kumar')
// console.log(passvalue)







