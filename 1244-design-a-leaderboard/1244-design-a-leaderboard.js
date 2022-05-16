
var Leaderboard = function() {
    this.board = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!(playerId in this.board)) this.board[playerId] = 0;
    this.board[playerId] += score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const score = Object.values(this.board).sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < K; i++) {
        total += score[i];
    }
    return total;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.board[playerId];
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */