function lowercase3(str){
    const p1 = str.substring(0,3).toLowerCase()
    return p1+str.substring(3,str.length)
}
console.log(lowercase3('PYTHON'))