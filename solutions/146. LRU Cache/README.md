# [146. LRU Cache](https://leetcode.com/problems/lru-cache/description/)

# Using ES6 Map and Doubly linked list

## Intuition

The hash map provides O(1) access to cache items, while the double-linked list maintains the order of usage, allowing for easy identification and removal of the least recently used items.

## Approach

## Complexity

1. Node Class: 
   - Represents each item in the cache. It contains the `key`, `value`, `prev`, and `next` pointers for doubly-linked list implementation.
   - This forms the basic element of the doubly linked list.

2. LRUCache Class: Manages the LRU cache operations.
   - Constructor:
      - Initializes the cache with a given `capacity`.
      - Creates a `Map` for storing key-node pairs, allowing for O(1) access.
      - Initializes dummy head and tail nodes linked to each other, simplifying edge case handling like adding or removing nodes.

   - Get Method::
      - Checks if the key exists in the cache.
      - If not found, returns -1.
      - If found, it moves the node to the end of the list, marking it as recently used.
      - Returns the value of the node.

   - Put Method :
      - If the `key` already exists, it removes the corresponding node.
      - Create and add a new node with the `key` and `value` at the end of the list.
      - Inserts the new node into the cache.
      - If adding the new node causes the cache to exceed its capacity, it removes the least recently used item, which is at the beginning of the doubly linked list.
      - If the cache exceeds `capacity`, remove the least recently used item (next to `head`) from both the list and the map.

   - Remove Method:
      - Remove a node from the doubly-linked list by adjusting the `prev` and `next` pointers of its neighbors.

   - Add Method:
      - Inserts a new node right before the dummy tail node in the doubly linked list.
      - This signifies that the node is now the most recently used item.
   
## Complexity

- Time Complexity: Both `get` and `put` operations are O(1), as they involve map lookups and basic pointer updates in a doubly-linked list.
- Space Complexity: O(capacity), as it stores at most `capacity + 1` elements in the cache and the linked list.

## Code

```javascript
// Node class to represent each element in the cache
class Node {
  constructor(key, value) {
    this.key = key; // Key of the node
    this.value = value; // Value of the node
    this.prev = null; // Pointer to the previous node in the doubly-linked list
    this.next = null; // Pointer to the next node in the doubly-linked list
  }
}

/**
 * @param {number} capacity
 */
// LRUCache class
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // Maximum number of elements the cache can hold
    this.cache = new Map(); // Map to store key-value pairs for O(1) access

    // Dummy head and tail nodes to simplify edge case handling
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    // Linking dummy head and tail to each other
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.cache.has(key)) {
      // Key not in cache, return -1
      return -1;
    }

    // Retrieve node from cache
    const node = this.cache.get(key);
    // Move node to end of list to mark as most recently used
    this.remove(node);
    this.add(node);
    // Return the value of the node
    return node.value;
  }

  put(key, value) {
    // If key already exists, remove the old node
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }

    // Create a new node with the key-value pair
    const newNode = new Node(key, value);
    // Add the new node to the end of the list
    this.add(newNode);
    // Add the new node to the cache
    this.cache.set(key, newNode);

    // If cache exceeds capacity, remove the least recently used item
    if (this.cache.size > this.capacity) {
      const leastUsed = this.head.next;
      this.remove(leastUsed);
      this.cache.delete(leastUsed.key);
    }
  }

  // Function to remove a node from the doubly-linked list
  remove(node) {
    // Detach node from its neighbors and adjust pointers
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  // Function to add a node right before the tail (end of the list)
  add(node) {
    // Insert node between lastNode and the tail
    const lastNode = this.tail.prev;
    lastNode.next = node;
    node.prev = lastNode;
    node.next = this.tail;
    this.tail.prev = node;
  }
}
```

# Using ES6 Map

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
