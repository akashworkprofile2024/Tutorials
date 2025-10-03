const sorting = (recievestr)=>{
       const store = recievestr.split('').sort().join("");
       return store;
};console.log(sorting('acbed'))