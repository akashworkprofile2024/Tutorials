// const copies = (receiver) => receiver.repeat(5);
// console.log(copies('Abc'));


const copies = (reciever)=>{
    let storage = ""     
    for(let i = 1 ; i <=5 ; i++)
    {
        storage += reciever
    }; return storage
};console.log(copies('abc'))