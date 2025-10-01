function removeletter(str , pos){
      return str.slice(0,pos) + str.slice(pos + 1)
}
const modifyres =  removeletter("Akash" , 2)
console.log(modifyres)


const name  = 'Akash'
console.log(name.slice(0,2)) 
console.log(name.slice(2+1)) 
