const n = 'filename'
console.log(n.slice(0,2))
if(n.slice(0,2) != "py"){
    const modify="py"+n;
    console.log('Add Py: ' , modify)
}else{
    console.log(`py Found: ` , n)
}