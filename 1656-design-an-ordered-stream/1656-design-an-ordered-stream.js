/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = {};
    this.current = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey] = value;
    const output = [];
    while (this.stream[this.current] !== undefined) {
        output.push(this.stream[this.current]);
        this.current++;
    }
    return output;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */