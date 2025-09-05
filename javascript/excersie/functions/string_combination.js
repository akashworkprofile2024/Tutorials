function gencom(fetch){
   let result = [] 
   for(let i = 0 ; i<fetch.length;i++){
      for(let j = i + 1; j <=fetch.length; j++){
         result.push(fetch.slice(i,j))
      }
   }
   return result;
}

console.log(gencom('dog'))


/*

Step 1 → Outer loop (i)

i starting index है, यानी substring कहाँ से शुरू होगी।

i चलता है 0 से लेकर str.length-1 तक।

"dog" की length = 3, तो i values होंगे: 0, 1, 2

Step 2 → Inner loop (j)

j ending index है (exclusive)।

यह हमेशा i+1 से शुरू होता है और str.length तक जाता है।

Iteration breakdown (जब "dog" दिया गया है):

जब i = 0 (मतलब 'd' से start)

j = 1 → str.slice(0,1) = "d"

j = 2 → str.slice(0,2) = "do"

j = 3 → str.slice(0,3) = "dog"

✅ Substrings: ["d", "do", "dog"]

जब i = 1 (मतलब 'o' से start)

j = 2 → str.slice(1,2) = "o"

j = 3 → str.slice(1,3) = "og"

✅ Substrings: ["o", "og"]

जब i = 2 (मतलब 'g' से start)

j = 3 → str.slice(2,3) = "g"

✅ Substrings: ["g"]

*/