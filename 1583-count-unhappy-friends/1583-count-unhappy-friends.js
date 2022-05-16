/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    const happyMap = new Array(n);      // [0, 2, 0, 1]
    
    for (const [a, b] of pairs) {   
        happyMap[a] = preferences[a].indexOf(b);
        happyMap[b] = preferences[b].indexOf(a);
    }
    
    let unhappy = 0;
    
    for (let i = 0; i < n; i++) {                                   // i = 0
        for (let j = 0; j < happyMap[i]; j++) {
            const partner = preferences[i][j];
        
            if (preferences[partner].indexOf(i) < happyMap[partner]) {
                unhappy++;
                break;
            }
        }                                        // j = 0

    }
    
    return unhappy;
};