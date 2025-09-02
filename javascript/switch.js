let input = 7
switch (input){
 case 0:
    day = "Sunday";
    console.log(day)
    break;
  case 1:
    day = "Monday";
    console.log(day)

    break;
  case 2:
     day = "Tuesday";
    console.log(day)

    break;
  case 3:
    day = "Wednesday";
    console.log(day)

    break;
  case 4:
    day = "Thursday";
    console.log(day)

    break;
  case 5:
    day = "Friday";
    console.log(day)

    break;
  case 6:
    day = "Saturday"

   default:
    console.log('Wrong Decision') 
}   

const input2 = 1
switch(input2){
    case 0:
        light = 'Light Turn Off'
        console.log(light)
        break;
    case 1:
        light=`Light Turn On`
        console.log(light)
        break;
    default:
        console.log('Light Fuse')        
}