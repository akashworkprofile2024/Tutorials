const person = new Array('emp1','emp2','emp3','emp4')
console.log(`Array Index: ${person.indexOf('emp3') + 1}`);

const person1 = new Array('emp1','emp2','emp3','emp2')
console.log(`Array Last Index Of: ${person.lastIndexOf('emp2')+1}`);

const person3 = new Array('Banana','Orange','Apple','Mango')
console.log(`Array Includes: ${person3.includes('Mango')}`);

const person4 = new Array(4, 9, 16, 25, 29)
console.log(`Array find: ${person4.find(myfun)}`);

function myfun(value , index  , array)
{
    return value > 18
}
