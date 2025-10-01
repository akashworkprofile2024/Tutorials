function number(num){ 
    if((num % 7)==0 || (num%11)==0){
         console.log(num%7 , num%11)
         return true
     }else{
         console.log(num%7 , num%11)
         return false
     }
}
console.log(number(15))