# [146. LRU Cache](https://leetcode.com/problems/lru-cache/description/)

## Intuition

We use a `Map` in JavaScript, which maintains insertion order, allowing easy identification and removal of the least recently used item.

## Approach

1.  Constructor (`constructor(capacity)`):

    - Initializes an empty `Map` object, `this.cache`, to store the key-value pairs of the cache.
    - Sets the `this.capacity` property to the specified capacity, limiting the number of items the cache can hold.

2.  Get Operation (`get(key)`):

    - If the key is not present in the map (cache miss), return -1.
    - Retrieve the value associated with the key.
    - Delete the key from the map and then re-insert it with its value. This ensures the key is now the most recently used item (as `Map` in JavaScript maintains the order of keys based on their insertion/recent usage).
    - Return the value.

3.  Put Operation (`put(key, value)`):
    - Delete the key from the map if it already exists (to update its order).
    - Insert the key-value pair into the map, making it the most recently used item.
    - If the size of the map exceeds the capacity, remove the least recently used item, which is the first item in the map (as per the insertion order).

## Complexity

- Time complexity: For both get and put operations, the time complexity is O(1).
- Space complexity: O(capacity). The space is used by the `Map` object, which holds at most `capacity` number of elements.

## Code

```javascript
/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.cache = new Map(); // Map to store key-value pairs
    this.capacity = capacity; // Max capacity of the cache
  }

  get(key) {
    if (!this.cache.has(key)) return -1; // Key not present
    const val = this.cache.get(key); // Get the value
    this.cache.delete(key); // Remove the key to reset its order
    this.cache.set(key, val); // Re-insert to make it the most recently used
    return val; // Return the value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.delete(key); // Remove if exists to update its order
    this.cache.set(key, value); // Insert/Update the key
    if (this.cache.size > this.capacity) {
      // Check if capacity exceeded
      const firstItem = this.cache.keys().next().value; // Get the least recently used key
      this.cache.delete(firstItem); // Remove the least recently used item
    }
  }
}
```
