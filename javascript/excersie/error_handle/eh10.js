const variable = (element) => {
    const found = element.find(e => e.includes('c'));
    console.log(found)
    if (found) {
        return `${found} is present`;
    } else {
        throw new Error("C not Found");
    }
};

try {
    const store = ["a", 'b', 'e', 'd'];
    console.log(variable(store));
} catch (err) {
    console.error(`Result: ${err.message}`);
}
