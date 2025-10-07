const variable = (holdval) => {
    if (holdval.length === 0) {
        throw new Error('String is empty'); // अगर string खाली है तो error फेंको
    }
    return holdval; // अगर string खाली नहीं है, तो उसे return करो
};

try {
    console.log(variable("")); // function कॉल कर रहे हैं
} catch (err) {
    console.error('Result:', err.message); // error को पकड़ कर message दिखा रहे हैं
}
