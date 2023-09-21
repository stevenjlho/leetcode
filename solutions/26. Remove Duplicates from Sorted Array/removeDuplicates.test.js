const removeDuplicates = require('./removeDuplicates.js');

test('[1,1,2]', () => {
    const nums = [1,1,2]
    const result = removeDuplicates(nums);
    expect(result).toBe(2);
    expect(nums.splice(0, result)).toEqual([1,2]);
});

test('[0,0,1,1,1,2,2,3,3,4]', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
    expect(nums.splice(0, result)).toEqual([0,1,2,3,4]);
});