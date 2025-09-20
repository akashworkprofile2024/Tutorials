// Sorting an Array
const empsort = ['a','e','b','d','c']
console.log(`Sorting an Array: ${empsort.sort()}`);

// Reversing an Array
console.log(`Reversing Array: ${empsort.reverse()}`);


const numsort=new Array(1,3,2,5,4,7,6)
store=numsort.sort()
console.log(`Reverse Number: ${store.reverse()}`);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});


// Sorting an Array in Random Order in javascript
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Example usage:
const original = [1, 2, 3, 4, 5];
const shuffled = shuffleArray([...original]); // Use spread to keep original intact

console.log("Original:", original);
console.log("Shuffled:", shuffled);



function myarrmax(reciver){
     let len = reciver.length;
     let max = -Infinity; // fix here
     while(len--){
        if(reciver[len] > max){
            max = reciver[len];
        }
     }
     console.log(max);
}

const arrfile = [44, 50, 60, 80];
myarrmax(arrfile); // Output: 80

/* -Infinity से शुरू करते हैं।

array को पीछे से एक-एक करके चेक करते हैं।

जो भी सबसे बड़ी value मिले, उसे max में स्टोर करते हैं।

अंत में max को print करते हैं। */


