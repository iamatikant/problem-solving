// Problem of the Day: LRU Cache
// Difficulty: Medium to Hard
// Asked by: Amazon, Google, Microsoft

// 📄 Problem Statement:
// Design a data structure that follows the Least Recently Used (LRU) cache eviction policy.

// Implement the LRUCache class:

// js
// Copy
// Edit
// class LRUCache {
//     constructor(capacity: number) {}
//     get(key: number): number {}
//     put(key: number, value: number): void {}
// }
// 🚦 Requirements:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

// int get(int key) Return the value of the key if the key exists, otherwise return -1.

// void put(int key, int value) Update or insert the value if the key is not already present.
// When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.

// 🧪 Example:
// js
// Copy
// Edit
// const lru = new LRUCache(2);

// lru.put(1, 1); // cache is {1=1}
// lru.put(2, 2); // cache is {1=1, 2=2}
// console.log(lru.get(1)); // returns 1

// lru.put(3, 3); // evicts key 2 → cache is {1=1, 3=3}
// console.log(lru.get(2)); // returns -1

// lru.put(4, 4); // evicts key 1 → cache is {3=3, 4=4}
// console.log(lru.get(1)); // returns -1
// console.log(lru.get(3)); // returns 3
// console.log(lru.get(4)); // returns 4
// 🛠️ Hints:
// Think about which data structures allow O(1) access and updates.

// You may need a combination of Map (or Object) and Doubly Linked List.

// JavaScript doesn’t have a built-in doubly linked list, but you can simulate one using objects.

// class LRUCache {
//     constructor(capacity: number) {}
//     get(key: number): number {}
//     put(key: number, value: number): void {}
// }

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
//     this.head = new Node(0, 0);
//     this.tail = new Node(0, 0);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }

//   _removeNode(node) {
//     node.prev.next = node.next.prev;
//     node.next.prev = node.prev.next;
//   }

//   _addToFront(node) {
//     this.head = node;
//     this.head.next.prev = node;
//   }

//   get(key) {
//     if (!this.map.has(key)) {
//       return -1;
//     }

//     const node = this.map.get(key);
//     this._removeNode(node);
//     this._addToFront(node);

//     return node.value;
//   }

//   put(key, value) {
//     if (this.map.has(key)) {
//       const node = this.map.get(key);
//       this._removeNode(node);
//       this._addToFront(node);
//       return;
//     }

//     const node = new Node(key, value);
//     this._addToFront(node);
//     if (this.map.size > this.capacity) {
//       this.map.delete(this.tail.key);
//       this._removeNode(this.tail);
//     }
//   }
// }

// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail.prev;
    this.map = new Map();
  }

  _addToFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  _removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);
    this._removeNode(node);
    this._addToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._removeNode(node);
      this._addToFront(node);
    } else {
      const size = this.map.size;
      const node = new Node(key, value);
      if (size < this.capacity) {
        this._addToFront(node);
      } else {
        this._addToFront(node);
        const lru = this.tail.prev;
        this._removeNode(lru);
        this.map.delete(lru.key);
      }

      this.map.set(key, node);
    }
  }
}
