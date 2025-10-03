const dividecommans = (n1 , n2)=>{
    if(n2 === 0 ) return `Divisor Not Allowed`
    const divide =  (n1 / n2)
    return `₹${divide.toLocaleString('en-IN')}`
};console.log(dividecommans(100000,5))