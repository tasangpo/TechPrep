/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
//n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
     let happyMap = new Array(n);
    
    
    for (let [i, j] of pairs) {
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j] = preferences[j].indexOf(i);
    }
    // happyMap = [0, 2, 0, 1]
    
    let unhappy = 0;
    
    for (let i = 0; i < n; i++) {                                        // i = 3
        for (let j = 0; j < happyMap[i]; j++) {                          // j = 0

            let partner = preferences[i][j];                            // partner is 2
            if (preferences[partner].indexOf(i) < happyMap[partner]) {
                unhappy++;
                break;
            }
        }
    }
    
    return unhappy;
};