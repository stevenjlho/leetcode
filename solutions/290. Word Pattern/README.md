# [290. Word Pattern](https://leetcode.com/problems/word-pattern/description/)

## Intuition

We need to use two hashmaps to ensure a one-to-one correspondence between characters in `pattern` and words in `s`.

## Approach

1. Create two mapping structures to store the correspondence from characters to words and from words to characters.
2. Split the string `s` into an array of words.
3. Before iterating, check if the length of the `pattern` string matches the number of words in `s`. If not, they don't follow the same pattern.
4. Iterate through words and characters, for each word in `s` and corresponding character in `pattern`:
   - If the word is already mapped to a character and it doesn't matches the current character of `pattern`, return `false`.
   - If the character is already mapped to a word and it doesn't matches the current word return `false`.
   - Update the mappings for the current word and character.
5. If the iteration completes without returning false, the two strings follow the same pattern, then return `true`.

## Complexity

- Time complexity: O(n), where n is the length of the `pattern` or the number of words in `s`.
- Space complexity: O(n), as in the worst case, every character in `pattern` might map to a unique word in `s`.

```javascript
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const wordToChar = new Map();
  const charToWord = new Map();
  const words = s.split(" ");

  // Check if lengths match
  if (pattern.length !== words.length) {
    return false;
  }

  // Iterate through each word and corresponding pattern character
  for (const [i, word] of words.entries()) {
    const char = pattern[i];

    // Check if current word's mapping to character is consistent
    if (wordToChar.has(word) && wordToChar.get(word) != char) {
      return false;
    }
    // Check if current character's mapping to word is consistent
    if (charToWord.has(char) && charToWord.get(char) !== word) {
      return false;
    }

    // Update the mappings for the current word and character.
    wordToChar.set(word, char);
    charToWord.set(char, word);
  }

  return true;
};
```
