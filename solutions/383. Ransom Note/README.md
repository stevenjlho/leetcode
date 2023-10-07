# [383. Ransom Note](https://leetcode.com/problems/ransom-note/description/)


## Intuition
We can solve this problem using a hashmap to keep track of the letter counts in the magazine. The key idea is to iterate through both the ransom note and the magazine and check if we can construct the ransom note using the letters available in the magazine.

## Approach
1. Initialize a hashmap called `chars` to store the counts of unique letters in the magazine.
2. Iterate through the letters of the magazine. If a letter can be found in `chars`, increment its count by 1; otherwise, initialize it with a count of 1.
3. Next, iterate through the letters of the ransom note to check if each letter can be matched in the `chars` hashmap.
4. If a letter from the ransom note is found in the `chars` hashmap, and its count is greater than 0, it means this letter can be constructed using the letters from the magazine. In this case, decrement the count in `chars` by 1.
5. If a letter cannot be matched or if its count in `chars` becomes zero, return `false` early, as the ransom note cannot be constructed.
6. Finally, if we successfully iterate through the entire ransom note, return `true` because we were able to construct it.

## Complexity
- Time complexity: O(m + n), where m is the length of the magazine and n is the length of the ransom note. We iterate through both strings once.
- Space complexity: O(m), where m is the number of unique characters in the magazine.

## Code
```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let chars = {};

    // Iterate through the magazine to count letter occurrences
    for (const char of magazine) {
        if(char in chars) {
            chars[char] += 1;
        } else {
            chars[char] = 1;
        }
    }

    // Iterate through the ransom note to check if each letter can be matched in the chars 
    for (const char of ransomNote) {
        if (char in chars && chars[char] > 0) {
            chars[char]--;
        } else {
            return false
        }
    }

    return true;
};
```
