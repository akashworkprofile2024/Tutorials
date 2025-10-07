const variable = (obj , source)=>
    Object.keys(source).every(key=>obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(variable({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
console.log(variable({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false