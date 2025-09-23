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
function emp(fname ,lname , dept , country){
        this.fname = fname
        this.lname=lname
        this.dept=dept
        this.country=country
        // this.domain='IT'  
}
// NORMAL FETCH DATA
const vpass1 = new emp('Akash' , "Biswas" , 'System admin' , 'INDIA')
const vpass2 = new emp('Mick' , "Jones" , 'Developer' , 'USA')
const vpass3 = new emp('Sakura' , "Moto" , 'Cheif Engineer' , 'JAPAN')

// FETCH DATA BY OBJECT ENTRIES
// vpass1.domain='IT'; 

const allemp = [vpass1,vpass2,vpass3];

for( let emp of allemp){
    for(let[key , value] of Object.entries(emp)){
           console.log(`${key} : ${value}`)
    } 
}


