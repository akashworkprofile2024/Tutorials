const arr = [10,32,20];
 let store = 0;
const variable = (recieve)=>{
    for(let i = 0 ; i<recieve.length;i++){
       
        store += recieve[i] ;
    }
    return store;
};console.log(variable(arr))

