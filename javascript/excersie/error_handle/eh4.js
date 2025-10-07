const variable = (holdval) => {
    if (holdval.length === 0) {
        throw new Error('Array is empty'); // अगर array खाली है तो error फेंको
    }
    return holdval; // अगर array खाली नहीं है, तो उसे return करो
};

try {
    let arr = []; // एक खाली array
    console.log(variable(arr)); // function कॉल कर रहे हैं
} catch (err) {
    console.error('Result:', err.message); // error को पकड़ कर message दिखा रहे हैं
}
