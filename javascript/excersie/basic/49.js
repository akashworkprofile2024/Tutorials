const arr = [3,4,5]
const variable = (reciever)=>{
    if(reciever.length===0){
           return reciever;
    }else{
        reciever.push(reciever.shift())
        return reciever
    }
};console.log(variable(arr))

/*
समझाइए:

const arr = [3,4,5]
→ एक ऐरे (array) बनाया गया है जिसमें 3, 4 और 5 नंबर हैं।

variable नाम का एक फ़ंक्शन बनाया गया है, जो reciever नाम का ऐरे इनपुट लेता है।

if(reciever.length === 0)
→ अगर ऐरे खाली है (यानि उसमें कोई भी एलिमेंट नहीं है), तो वही ऐरे वापस कर देता है।

else { reciever.push(reciever.shift()) }

shift() → ऐरे का पहला एलिमेंट निकाल देता है और उसे रिटर्न करता है।
(यहाँ 3 निकाला जाएगा)।

push() → उस निकाले गए एलिमेंट को ऐरे के आखिरी में जोड़ देता है।
(यानि 3 को लास्ट में डाल देगा)।

अब ऐरे [4,5,3] बन जाता है और वही वापस return होता है।

console.log(variable(arr))
→ Output आएगा:

[4, 5, 3]
*/