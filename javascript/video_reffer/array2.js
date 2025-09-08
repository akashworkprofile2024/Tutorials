const lang = ['python','java','javascript','Ruby']
const weblang = ['html','css','Bootstrap','php']

// lang.push(weblang) // push Array into Another array
// console.log(lang[4]) // acces array in the main lang array

let store = lang.concat(weblang)
console.log(`${store}`);