// try{
//     let num = 5;
//     num();
// }catch(err){
//     if(err instanceof TypeError){
//         console.log('Type Error Found:' , err.message)
//     }else{
//         console.log('Any Other Error:' , err.message)
//     }
// }


const variable = (name)=>{
    if( typeof name != "string"){
        throw new Error(`Receive an Integer val not String`)
    }
    return `Mr.${name}`;
}
try{
    console.log(variable("Rahul "))
}catch(err){
    console.error(err.message);
}

// 🔴 TypeError क्या होता है?

// TypeError तब आता है जब आप किसी वैरिएबल या वैल्यू पर ऐसा ऑपरेशन कर रहे होते हैं जो उसके टाइप के लिए वैध (valid) नहीं होता।

/* 
 📌 निष्कर्ष (Conclusion):

TypeError एक आम एरर है जब आप गलत टाइप के साथ ऑपरेशन करते हैं।

try-catch ब्लॉक का उपयोग करके आप इन एरर्स को पकड़ सकते हैं और प्रोग्राम को क्रैश होने से बचा सकते हैं।

instanceof का उपयोग करके यह जांच सकते हैं कि एरर किस प्रकार की है।


*/