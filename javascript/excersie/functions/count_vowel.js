function port(reciever){

    vowel_list = 'aeiouAEIOU'
   let count = 0;
      for(let i = 0;i<=reciever.length;i++){
        // console.log(`${reciever[i]}`);
        if(vowel_list.indexOf(reciever[i]) !== -1){
            
            count +=1;
        }
      }
      return count;
}
console.log(port('The quick brown fox'))



const port1 = str => [...str].filter(vowel_list => 'aeiouAEIOU'.includes(vowel_list)).length;

console.log(port1('The quick brown fox')); // Output: 5
