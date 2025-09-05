function caplet(reciever){
      return reciever
      .split(' ')
      .filter(word => word.length>0)
      .map(word=> word[0].toUpperCase()+word.slice(1))
      .join(' ')
    
}

console.log(`${caplet('The Javascript is Awesome')}`);


/*
split(' ')
यह reciever (जो इनपुट स्ट्रिंग है) को space के आधार पर छोटे-छोटे शब्दों में बाँट देता है।
उदाहरण: "The Javascript is Awesome" → ["The", "Javascript", "is", "Awesome"]

filter(word => word.length > 0)
कभी-कभी स्ट्रिंग में दो या ज्यादा spaces हो सकते हैं, जिससे खाली शब्द (empty strings) बन जाते हैं।
यह फ़िल्टर उन empty strings को हटा देता है ताकि बाद के प्रोसेसिंग में दिक्कत ना हो।

map(word => word[0].toUpperCase() + word.slice(1))
map हर शब्द पर काम करता है। यहाँ:

word[0].toUpperCase() → शब्द का पहला अक्षर uppercase (बड़ा) बनाता है।

word.slice(1) → शब्द के बाकी अक्षर वैसे के वैसे रखते हैं।
इसे जोड़कर पूरा शब्द वापस बनता है जैसे "Javascript" → "Javascript", "is" → "Is"।

join(' ')
अब सारे words को वापस एक स्ट्रिंग में space डालकर जोड़ देता है।
जैसे: ["The", "Javascript", "Is", "Awesome"] → "The Javascript Is Awesome"
*/