function port(reciever){
        // Remove Puntuation and splt the string into words
        
        const words = reciever.match(/\b\w+\b/g)
        // console.log(`${words}`); 

        if(!words || words.length === 0){
                return null ; 
        }

       let  largest = words[0];
       for(let i=1;i<words.length;i++){
         if(words[i].length > largest.length){
                largest = words[i];      
         }
       }
     return largest
}
console.log(`${port('Web Development Design')}`);


/*
   🟩 1. function port(receiver) {

हमने एक function बनाया है जिसका नाम है port।

यह function एक input लेता है — receiver नाम का टेक्स्ट/स्ट्रिंग।

🟩 2. const words = receiver.match(/\b\w+\b/g);

यह लाइन input में से सिर्फ शब्द (words) निकालती है।

/\b\w+\b/g एक regex (regular expression) है, जो टेक्स्ट में से शब्दों को पहचानता है।

इससे punctuation (जैसे कि , . ! ?) हट जाते हैं और हमें एक-एक शब्द की list मिलती है।

👉 उदाहरण: "Web Development Design" ➝ ["Web", "Development", "Design"]

🟩 3. if (!words || words.length === 0) { return null; }

यह check कर रहा है कि अगर words खाली हैं (यानि कोई शब्द मिला ही नहीं), तो null वापस कर दो।

🟩 4. let largest = words[0];

सबसे पहला शब्द (words[0]) को हम मान लेते हैं कि यही सबसे बड़ा है — अभी के लिए।

🟩 5. for (let i = 1; i < words.length; i++) { ... }

अब हम बाकी सारे शब्दों को एक-एक करके चेक करते हैं (index 1 से शुरू करके)।

🟩 6. if (words[i].length > largest.length) { largest = words[i]; }

अगर किसी शब्द की लंबाई (length) अभी के सबसे बड़े शब्द से ज्यादा है,

तो हम उसे नया सबसे बड़ा शब्द मान लेते हैं (largest = words[i])।

🟩 7. return largest;

लूप के बाद हमारे पास सबसे बड़ा शब्द होता है — वही हम return करते हैं।

🟩 8. console.log(port('Web Development Design'));

अब हम function को चलाकर उसका result console में दिखाते हैं।

इसमें input string है: 'Web Development Design'

*/