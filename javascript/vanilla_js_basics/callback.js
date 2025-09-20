// Sequence Control
function display(some){
   console.log(`Answer: ${some}`);
}

function calculate(n1,n2){
     let sum = n1 + n2
     return sum
}

let result = calculate(5,6)
display(result)


//  Method 2 

function display1(reciver){
    console.log(`Answer Result; ${reciver}`);
}

function calculate1(num1 , num2){
    let sumr = num1 + num2
      display(sumr)
}

calculate1(5,3)


// Callback Function
function display2(reciverport){
    console.log(`Show data: ${reciverport}`);
}

function fetchdata(num1 , num2 , connectcallbackport){
       let calculate = num1 + num2
       connectcallbackport(calculate)

}

fetchdata('Akash',' Biswas',display2)

/* 
 In the example above, display2 is a called a callback function.

It is passed to fetchdata() as an argument.
*/


const number = new Array(1,2,-3,-4,5)
console.log(`Remove Negative Number: ${removeneg(number , (x) => x >= 0)}`);  //checking area this one 

function removeneg(numbers,callback){
    const emptyarr = []
    for ( const x  of numbers){
        if(callback(x)){
           emptyarr.push(x)
        }
    }
    return emptyarr
}


