// const variable = (reciever)=>{
//          const storage = new Set(reciever)
//          return [...storage]
// }
// const arr = [1,3,2,4,5,3,2]
// console.log(variable(arr));


const variable = (receiver)=>{
        const seen = new Set(); // track seen elements 
        const result = []; //   store unique element in order
          receiver.forEach(element => {
                  if(!seen.has(element)){       // IF not seen before
                    seen.add(element)               // Mark as seen
                    result.push(element)                   //  add to result
                  }
          });
          console.log(seen)
          return result.sort();
};const arr =    [1,3,2,4,5,3,2]
console.log(variable(arr))


/*
seen एक Set है, जो उन सभी आइटम्स को याद रखता है जो हमने अब तक देखे हैं।

हर आइटम (item) के लिए:

seen.has(item) चेक करता है कि क्या ये आइटम पहले से seen Set में मौजूद है या नहीं।

अगर यह नहीं है (मतलब !seen.has(item) यानी "अगर ये आइटम पहले नहीं मिला"), तो:

हम उसे seen Set में डाल देते हैं (seen.add(item)) ताकि अगली बार जब भी ये आइटम आए, हमें पता चले कि ये डुप्लीकेट है।

और साथ ही उस आइटम को result नाम के नए array में डाल देते हैं क्योंकि ये पहली बार आया है।

अगर आइटम पहले से मौजूद है (मतलब ये डुप्लीकेट है), तो हम उसे ignore कर देते हैं, यानी result में नहीं डालते।
*/ 


