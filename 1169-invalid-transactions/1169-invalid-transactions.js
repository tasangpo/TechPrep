/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const transObj = {};
    for (let i = 0; i < transactions.length; i++) {
        const [name, time, amount, city] = transactions[i].split(',');
        transObj[i] = {name, time, amount, city, invalid: false};
        if (amount > 1000) transObj[i].invalid = true;
    }
        
    for (let i = 0; i < transactions.length; i++) {
        const prevTrans = transObj[i];
        for (let j = i + 1; j < transactions.length; j++) {
            const currTrans = transObj[j];
            const timeDifferntial = Math.abs(currTrans.time - prevTrans.time)
            if (prevTrans.name === currTrans.name && prevTrans.city !== currTrans.city && timeDifferntial <= 60 ) {
                transObj[i].invalid = true;
                transObj[j].invalid = true;
            }
        }
    }

    
    const invalids = [];
    
    for (let key in transObj) {
        if (transObj[key].invalid === true) invalids.push(transactions[key]);
    }
    
    return invalids;
};