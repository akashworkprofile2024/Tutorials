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
