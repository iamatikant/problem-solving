// LRU Cache

class DLL {
  constructor(prev, next, val, key) {
    this.next = next;
    this.val = val;
    this.prev = prev;
    this.key = key;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    //cache storage in map DS for quick access
    this.map = new Map();
    /** My head and tail are pointing to the latest and the oldest cache entries */
    this.head = new DLL(null, null, null, null);
    this.tail = new DLL(null, null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _addToHead(node) {
    this.head.next.prev = node;
    node.next = this.head.next; // see if this is needed
    this.head.next = node;
    node.prev = this.head;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this._removeNode(node);
    this._addToHead(node);
    return node.val;
  }

  put(key, val) {
    if (!key || !val) {
      return;
    }
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val;
      this._removeNode(node);
      this._addToHead(node);
    } else {
      const node = new DLL(null, null, val, key);
      const currentSize = this.map.size;
      if (currentSize === this.capacity) {
        this.map.delete(this.tail.prev.key);
        this._removeNode(this.tail.prev);
      }
      this._addToHead(node);
      this.map.set(key, node);
    }
  }
}
