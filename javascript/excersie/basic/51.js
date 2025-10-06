const arr = [30 , 40 , 50 , 30 , 40 , 60]

const variable = (receiver)=>{
    const count30 = arr.filter(num => num===30).length;
    const count40=arr.filter(num=>num===40).length;
    return count30 >=2 && count40 >=2;
};console.log(variable(arr))