function range(n1 ,n2){
      if((n1+n2 >=50 && n1+n2<=100)){
          return `${true}: 50 ... ${n1+n2} ... 100`
      }else{
         return `${false} , ${n1+n2} 50 .... 100` 
      }      
} console.log(range(30,30))
