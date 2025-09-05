function revarr(reciever){
     reciever = reciever + ''
      let reversed =  reciever.split('').reverse().join('')
      let store = Number(reversed)
      return store
}

const originalarr = 32243
const result = revarr(originalarr)
console.log(result)




// shorter way

function revarr2(num){
    return Number(num.toString().split('').reverse().join(''))
}
console.log(revarr2(12345))


// Arrow function
const revarr3 = numv => +[...numv.toString()].reverse().join('')
console.log(revarr3(123456))