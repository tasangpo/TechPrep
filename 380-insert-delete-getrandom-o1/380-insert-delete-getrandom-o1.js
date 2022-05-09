
class RandomizedSet {
    constructor() {
        this.nums = [];
        this.idxMap = new Map();
    }
    insert(val) {
        if(this.idxMap.has(val)) {
            return false;
        }
        this.nums.push(val);
        this.idxMap.set(val, this.nums.length - 1)
        return true;
    }
    remove(val) {
        if(!this.idxMap.has(val)) {
            return false;
        }
        const valIdx = this.idxMap.get(val);
        [this.nums[valIdx], this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1], this.nums[valIdx]];
        this.nums.pop();
        this.idxMap.set(this.nums[valIdx], valIdx);
        this.idxMap.delete(val);
        return true;
    }
    getRandom() {
        const randomIdx = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIdx];
    }
}