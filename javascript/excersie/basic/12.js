function differ(n){
         if(n <= 13){
            return Math.abs(13 - n) ;
         }else{
            return  Math.abs((13-n)*2);
         }
}
console.log(differ(32))
console.log(differ(11))