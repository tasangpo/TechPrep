/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const val = this.map.get(key);

    if (val === undefined) return -1;
    
    this.map.delete(key);
    this.map.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.size >= this.capacity && !this.map.has(key)) {
        const oldKey = this.map.keys().next().value;
        this.map.delete(oldKey);
    }
    this.map.delete(key);
    this.map.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */