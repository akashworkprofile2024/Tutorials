function check(str){
       if(str.substring(0,4) != "Java"){
          return `Java is not Present`;
       }   else{
            return `Java is Present`

       }
}
console.log(check('Akash'))