// A transaction is possibly invalid if:
// the amount exceeds $1000, or;
// if it occurs within(and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma - separated values representing the name, time(in minutes), amount, and city of the transaction.
// Return a list of transactions that are possibly invalid.You may return the answer in any order.

//     Example 1:
// Input: transactions = ["alice,20,800,mtv", "alice,50,100,beijing"]
// Output: ["alice,20,800,mtv", "alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city.Similarly the second one is invalid too.

//     Example 2:
// Input: transactions = ["alice,20,800,mtv", "alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]

// Example 3:
// Input: transactions = ["alice,20,800,mtv", "bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]

// Constraints:
// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each { name } and { city } consist of lowercase English letters, and have lengths between 1 and 10.
// Each { time } consist of digits, and represent an integer between 0 and 1000.
// Each { amount } consist of digits, and represent an integer between 0 and 2000.


var invalidTransactions = function (transactions) { // transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
    // I want my object to look like this: {0: {name: 'alice', time: 20, amount: 800, location: 'mtv'}, 1: {name: 'alice', time: 50, amount: 100, location: 'beijing'}}

    const obj = {};
    for (let i = 0; i < transactions.length; i++) {
        const [name, time, amount, location] = transactions[i].split(',');
        obj[i] = {name: name, time: time, amount: amount, location: location, invalid: false};   
    }

    for (let i = 0; i < transactions.length; i++) {
        let prev = obj[i];
        if (prev.amount > 1000) prev.invalid = true;
        for (let j = i + 1; j < transactions.length; j++) {
            let curr = obj[j];
            if (prev.name === curr.name && Math.abs(prev.time - curr.time) <= 60 && prev.location !== curr.location) {
                prev.invalid = true;
                curr.invalid = true;
            }

        }
    }

    const invalids = [];
    for (let i in obj) {
        if (obj[i].invalid === true) {
            invalids.push(transactions[i]);
        }
    }

    return invalids;
};

console.log(invalidTransactions(["alex,676,260,bangkok", "bob,656,1366,bangkok", "alex,393,616,bangkok", "bob,820,990,amsterdam", "alex,596,1390,amsterdam"]))

//["alex,676,260,bangkok","bob,656,1366,bangkok","alex,393,616,bangkok","bob,820,990,amsterdam","alex,596,1390,amsterdam"]