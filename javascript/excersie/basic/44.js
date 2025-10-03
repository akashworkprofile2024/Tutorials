const variable = (str1,str2)=>{
    if(str1.length === str2.length){
        return `${str1}${str2}`;
    }else{
        return false;
    }
};console.log(variable("python" , "langua"))


// const variable = (str1,str2)=>str1.length === str2.length ? str1+str2 : false;
// console.log(variable("Python","Langua"));