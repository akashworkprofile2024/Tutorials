let store = 'IBM 360'
myfun()

function myfun(){
    console.log(`I can Display ${store}`)
}

// Local Scope
function greet(){
    let message = `Local Scope: Hello World`
    console.log(message)
}

greet()
// console.log(message)


{
    let name1 = 'Alice'
    console.log(name1)
}
// console.log(name1);