# [146. LRU Cache](https://leetcode.com/problems/lru-cache/description/)

## Intuition

We use a `Map` in JavaScript, which maintains insertion order, allowing easy identification and removal of the least recently used item.

## Approach

1.  Initialize a `Map` object to store key-value pairs and set the cache's capacity. The `Map` object ensures that the order of keys is maintained as per insertion order, which is crucial for the LRU mechanism.
2.  `get` Method
    - If the key is not present in the `Map`, return -1.
    - If the key is found, get its value, delete the key from the `Map` to remove its current position, and then set it again with the same value. This updates its position to the most recently used.
3.  `put` Method
    - Delete the key if it already exists and set the key with its new value to ensure the order is updated when it's re-inserted.
    - If the size of the `Map` exceeds the capacity, delete the least recently used item. The first item in the `Map` represents the least recently used, as `Map` maintains the insertion order.

 
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
    this.map = new Map(); // Map to store key-value pairs
    this.capacity = capacity; // Max capacity of the cache
  }

  get(key) {
    if (!this.map.has(key)) return -1; // Key not present
    const val = this.map.get(key); // Get the value
    this.map.delete(key); // Remove the key to reset its order
    this.map.set(key, val); // Re-insert to make it the most recently used
    return val; // Return the value
  }

  put(key, value) {
    this.map.delete(key); // Remove if exists to update its order
    this.map.set(key, value); // Insert/Update the key
    if (this.map.size > this.capacity) {
      // Check if capacity exceeded
      const firstItem = this.map.keys().next().value; // Get the least recently used key
      this.map.delete(firstItem); // Remove the least recently used item
    }
  }
}
```
