const variable = (recieve)=>{
    if(recieve.slice(-6) === 'script'){
         return true;
    }else{
         return false;
    }
};console.log(variable('javascript'));
// const variable = (recieve)=>recieve.endsWith('script');
// console.log(variable("javascript"));