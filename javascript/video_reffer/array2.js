const lang = ['python','java','javascript','Ruby']
const weblang = ['html','css','Bootstrap','php']

// lang.push(weblang) // push Array into Another array
// console.log(lang[4]) // acces array in the main lang array

// let store = lang.concat(weblang)  // concat give new array
// console.log(`${store}`);

let storelang = [...lang,...weblang] // 2nd method for array concate
console.log(`${storelang}`);

const newarr = [1,2,[3,4,5 , 6,7,[8,9,10]]]
const real_arr = newarr.flat(Infinity)  // spread out all array inside array
console.log(`${real_arr}`);  



