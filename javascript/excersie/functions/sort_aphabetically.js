function sortalpha(reciever){
          return reciever.split('').sort((a,b)=> a.localeCompare(b,undefined,{sensitivity:'base'})).join('')
}

console.log(`${sortalpha('javascript')}`);




// function sortalpha(reciever){
//           return reciever.split('').sort((a,b)=> a.localeCompare(b,undefined,{sensitivity:'base'})).join('')
// }

// console.log(`${sortalpha('Javascript')}`);



/*
 
  🔍 अब इस लाइन को भागों में समझते हैं:
🔸 a.localeCompare(b, undefined, { sensitivity: 'base' })

यह दो अक्षरों (या स्ट्रिंग्स) a और b की तुलना करता है।

localeCompare एक फ़ंक्शन है जो यह तय करता है कि a पहले आएगा या b, या दोनों बराबर हैं।

undefined: इसका मतलब है कि ब्राउज़र का डिफ़ॉल्ट लोकैल (locale) यूज़ करो (जैसे कि 'en' या 'hi')

{ sensitivity: 'base' }: इसका मतलब है:

बड़े और छोटे अक्षरों को एक जैसा समझो, और एक्सेंट (जैसे á, à, â) को भी नजरअंदाज़ करो।

🔸 .sort((a, b) => ...)

यह JavaScript का .sort() method है जो array के हर दो elements की तुलना करता है।

हम इसमें एक function दे रहे हैं जो बताता है कि कौन-सा element पहले आना चाहिए।

✅ पूरा लाइन का मतलब:

Array को sort करो इस तरह कि उसमें मौजूद हर दो अक्षरों की तुलना localeCompare से की जाए, और बड़े-छोटे अक्षर (A, a) में फर्क न किया जाए।

*/