const capture = new Date();
const year = capture.getFullYear();

if(year % 400 == 0){
    console.log(`1st condition:  Leap Year`);
}else if(year % 100 == 0 && year % 400 !==0){
    console.log(`2nd condition: Not Leap Year`)
}else if(year % 4 == 0 && year % 100 !== 0){
      console.log(`3rd condtion: Leap Year`)  
}else{
    console.log(`Leap Year`)
}


