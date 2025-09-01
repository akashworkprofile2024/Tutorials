// creation of array
const arr_emp = ['emp1' , 'emp2' , 'emp3']

//Push Element in  empty Array
const empty_array = [];
empty_array[0]='v1';
empty_array[2]='v2';
empty_array[1]='v3';
empty_array[3]='v4';
console.log(empty_array);


// array keywords
const product = new Array('Product1','Product2');
console.log(product);


// Changing an Array Elements
const emp_name = new Array('Raj' , 'Hena');
console.log(`Before Change: ${emp_name}`);
emp_name[0]= 'Kunaal'; // this is our change for index 0
console.log(`After Change: ${emp_name}`);


// Array into String

const conversion = new Array('English','Hindi','Bengali');
console.log(`Before Conversion: ${typeof(conversion)}`);
store = conversion.toString(); 
console.log(`Type Checking: ${typeof(store)}`);


//Array Object 
const person = {firstname:'Rahul',lname:'Kumar',dept:'Mechanical'};
console.log(`Access Arr Object: ${person.firstname} ${person.lname}`);
console.log(`What was the Type: ${typeof(person.firstname)}`);


// Array can be Object 
let userarray = [ {name: 'Alice' , lname:'Biswas'},  {name:'Akshay' , lname:'Kumar'},{name:'Priya' , lname:'Sinha'}];
console.log( `Array Object: `, userarray[0].name ,userarray[0].lname);


// Array Properties and Methods
let storearr = new Array('emp1', 'emp3', 'emp2', 'emp5', 'emp4');

let storelength = storearr.length;
let storesortedarr = storearr.sort();

console.log(`${storelength}\n${storesortedarr}`);


// Looping Array

let looparray = new Array('Akash' , "Hena" , 'Chetan');
looparray.forEach(element => console.log(element));


// push 

let randomarr = []
randomarr.push('Lemon' , 'Apple' , 'Orange');
console.log(`Pushing Elements: ${randomarr}`);

randomarr[randomarr.length]='Pears';
console.log('Push element using array length: ',randomarr);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits


// let arrpi = new Array(90);
// console.log(arrpi);     //   Show Empty Items


// ISARRAY
storeresult = Array.isArray(randomarr)
console.log(storeresult);


// Nested Arrays and Objects

const myObj = [
  {
    name: "John",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] }
    ]
  },
  {
    name: "Maria",
    age: 40,
    cars: [
      { name: "Chevrolet", models: ["Spark", "Cruze", "Malibu"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] }
    ]
  }
];

// Accessing John by index (0)
console.log(myObj[0]);
console.log(myObj[1]);

