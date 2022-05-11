/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const transObj = {};
    for (let i = 0; i < transactions.length; i++) {
        const [name, time, price, location] = transactions[i].split(',');
        transObj[i] = {name: name, time: time, price: price, location: location, invalid: false};
    }
    
    for (let i = 0; i < transactions.length; i++) {
        const prev = transObj[i];
        if (prev.price > 1000) prev.invalid = true;
        for (let j = i + 1; j < transactions.length; j++) {
            const curr = transObj[j];
            if (prev.name === curr.name && prev.location !== curr.location && Math.abs(prev.time - curr.time) <= 60) {
                prev.invalid = true;
                curr.invalid = true;
            }
        }
    }
    
    const invalids = [];
    for (const i in transObj) {
        if (transObj[i].invalid === true) invalids.push(transactions[i]);
    }
    return invalids;
    
};