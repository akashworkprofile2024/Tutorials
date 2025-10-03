const variable = (recievestr)=>{
    const lower = recievestr.toLowerCase()
    const vowels = 'aeiou';
    let storage = "";

    for(let x=0 ; x<lower.length; x++){
        if(vowels.includes(lower[x]) === true){
            storage += lower[x]
        }
    };return `Vowels_Found:${storage}\nVowels_Count:${storage.length}`
};console.log(variable('Akash Biswas'))