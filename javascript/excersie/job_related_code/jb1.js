// Find Duplicates from Array
const variable = (reciever)=>{
    let store = 0;
    let storage = [];
    for(let i =  0 ; i<reciever.length;i++){
        if(reciever[i] === 2 || reciever[i] === 3  ){
            store = store +1 ;
            storage.push(reciever[i])
        }
    }
    console.log(storage.sort())
    return(`Duplicate Count: ${store}`)
}
const arr  = [1,3,2,4,5,3,2];
console.log(variable(arr));

