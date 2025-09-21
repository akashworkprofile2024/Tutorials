// OBJECT LITERALS
const user = {
      username:'akash',
      logincount:'8',
      signin:true,

      getuserdetails: function(){
           console.log('Got user details from database')
           console.log(`innerUsername: ${this.username}`)
           console.log(`This content: `,this)
      }
}
console.log(user.username);
console.log(user.getuserdetails());
console.log(`Outter: ` , this)


// Constructor function  {new}:
function User(username , isloggedin){
          this.username = username
          this.isloggedin = isloggedin
          return this  
}

const user1 = new User('Akash' , true)
const user2 = new User('Rahul' , false)   // Overwrite
console.log(user1);
console.log(user2);

