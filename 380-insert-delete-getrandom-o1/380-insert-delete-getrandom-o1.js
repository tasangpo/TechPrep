
var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.array.push(val);
    this.map.set(val, this.array.length - 1);
    return true;
};


RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    
    const idx = this.map.get(val);
    
    [this.array[idx], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[idx]];
    this.array.pop();
    this.map.set(this.array[idx], idx)
    this.map.delete(val);
    return true;
};


RandomizedSet.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.array.length);
    return this.array[randomIdx]
};

