
var RandomizedSet = function() {
    this.map = new Map();               
    this.nums = new Array();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.nums.push(val);                                // [2]
    this.map.set(val, this.nums.length - 1);            // {2: 0}
    
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    
    const idx = this.map.get(val); // 0;
    [this.nums[idx], this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1], this.nums[idx]];
    this.nums.pop();
    this.map.delete(val);
    
    this.map.set(this.nums[idx], idx);
    
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */