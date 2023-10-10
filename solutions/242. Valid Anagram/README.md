# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

## Intuition
Using a hash table to record the occurrences of characters in strings s and t and check if all elements in the record are zero.

## Approach
1. Initialize an array `record` of size 26 to keep track of the count of occurrences for each character. Initialize all elements to 0.
2. Iterate through the characters of string `s` and increment the corresponding element in the `record` array based on the character's ASCII value.
3. Iterate through the characters of string `t` and decrement the corresponding element in the `record` array based on the character's ASCII value.
4. After both iterations, check if all elements in the `record` array are zero. If any element is not zero, return `false` early as it indicates a mismatch in character counts.
5. If all elements in the `record` array are zero, return `true`, indicating that the strings are valid anagrams.

## Complexity
- Time complexity: O(n), where n is the length of the input strings `s` and `t`. We iterate through both strings once. 
- Space complexity: O(1), as the `record` array has a fixed size of 26, which is independent of the input size.

## Code
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let record = new Array(26).fill(0);

    // Iterate through characters in string s and increment corresponding counts
    for(let i = 0; i < s.length; i++) {
        record[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    // Iterate through characters in string s and increment corresponding counts
    for(let i = 0; i < t.length; i++) {
        record[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    // Check if all counts in the record array are zero
    for(let count of record) {
        if( count !== 0) {
            return false;
        }
    }

    return true;
};
```
