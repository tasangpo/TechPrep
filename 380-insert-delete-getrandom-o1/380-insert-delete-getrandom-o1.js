
var RandomizedSet = function() {
    this.map = new Map();
    this.array = new Array();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.array.push(val);
    this.map.set(val, this.array.length - 1);
    return true;
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    let idx = this.map.get(val);
    this.map.delete(val);
    [this.array[idx], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[idx]];
    this.array.pop();
    this.map.set(this.array[idx], idx);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const random = Math.floor(Math.random() * this.array.length);
    return this.array[random];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */