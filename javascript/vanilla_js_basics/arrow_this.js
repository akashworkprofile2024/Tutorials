const user = { 
    username:'Rahul kumar',
    price: 1000,

    welcomeMsg: function(){
           console.log(`${this.username} Welcome to Website`);
        //    console.log(this) 
    }
    
}

// user.welcomeMsg()
// user.username = 'Sam' // Overwrite context
// user.welcomeMsg()
// console.log(this)


// function one(){
//     let username = 'pinky'
//     console.log(this.username);
// }

// one()

// Arrow Function
// const demo = () => {
//     let username = 'Priya'
//     console.log(`${this}`);
// }
// demo()


// Implicit Return
// const demo2  = (n1 , n2 ) =>{
//     return n1 + n2
// }
// console.log(`${(demo2(3,4))}`);

// Emplicit Return Arrow Function
// const demo3 = (n1 , n2 ) => n1 + n2
// console.log(`${demo3(2,5)}`);

// no need return 
// const demo4 = (n1,n2) => (n1 + n2)
// console.log(`${demo4(4,5)}`);

// Object return
// const demo5 = (n1 , n2 ) => ({username : 'Akash Biswas' })
// console.log(`${demo5(3 , 3)}`);


const arrayfun = []


