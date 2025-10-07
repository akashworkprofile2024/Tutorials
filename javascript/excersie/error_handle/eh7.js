const variable = (type) => {
    if (type === "range") {
        throw new RangeError('This is Range Error');
    } else if (type === "typeof") {
        throw new TypeError('This is Type Error');
    } else if (type === 'usererror') {
        throw new Error('User Created Error');
    } else {
        return `No Error`;
    }
};

const typesToTest = ['range', 'typeof', 'usererror', 'none'];

typesToTest.forEach((type) => {
    try {
        let result = variable(type);
        console.log(`Result for "${type}":`, result);
    } catch (err) {
        if (err instanceof RangeError) {
            console.error(`RangeError for "${type}":`, err.message);
        } else if (err instanceof TypeError) {
            console.error(`TypeError for "${type}":`, err.message);
        } else {
            console.error(`Other Error for "${type}":`, err.message);
        }
    }
});
