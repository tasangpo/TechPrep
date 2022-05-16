/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const obj = {};
    for (let i = 0; i < transactions.length; i++) {
        const [name, time, amount, location] = transactions[i].split(',');
        obj[i] = {name, time, amount, location, invalid: false};
        if (amount > 1000) obj[i].invalid = true;
    } 
    
    for (let i = 0; i < transactions.length; i++) {
        const prevTransaction = obj[i];
        for (let j = i + 1; j < transactions.length; j++) {
            const currTransaction = obj[j];
            
            if (prevTransaction.name === currTransaction.name && prevTransaction.location !== currTransaction.location && Math.abs(currTransaction.time - prevTransaction.time) <= 60) {
                prevTransaction.invalid = true;
                currTransaction.invalid = true;
            }
        }
    }
    
    const output = [];
    for (const i in obj) if (obj[i].invalid=== true) output.push(transactions[i]);
    return output;
};