//  Object Declare like Literal and Constructor

// singleton ->  an object-oriented design pattern that ensures a class has only one instance and provides a single, global point of access to it

// When we use literal for create object that is not singleton


// Object.create   // constructor method -> this is a singleton object



// Object Literals

const symkey = Symbol('Keypass')

const user = {
      name: 'Rahul',
      lname:'Kumar',
      'fullname':'Rahul Kumar',
      email:'rahul@gmail.com',
      age:45,
      location:'Kolkata',
      islogin:false,
      activedays:['Monday','Tuesday'],
      [symkey]:' ',
    }   // object ready

store = user['name']
console.log(`Access Object: ${store} -> Type: ${typeof store}`);

// Change Object element
console.log(`Before Modify Element: `, user.email)
user.email = 'rahul2000@gmail.com'
console.log(`After Modify Element: `,user.email)


// Lock element on Object
Object.freeze(user)  
user.email='rahul1999@gmail.com'
console.log(`Try to Change After Freeze:` , user); 