var relativeSortArray = function(arr1, arr2) {
    const counter = {};
    for (let num of arr1) {
        if (!(num in counter)) counter[num] = 0;
        counter[num] += 1;
    }
    
    const result = [];
    
    for (let num of arr2) {
        const count = counter[num];
        for (let i = 0; i < count; i++) {
            result.push(num);
        }
    }
    
    return result;
};

const removeRepeatedNumbers = (arr1, arr2) => {
    const set = new Set(arr2);
    const result = [];
    for (let num of arr1) {
        if (!(set.has(num))) result.push(num);

    }
    return result.sort((a,b) => a - b); 
}



