class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(value, index) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) {
      return null;
    }
    let node = new LinkedListNode(value, prev.next);
    prev.next = node;
    this.length++;
  }

  removeHead() {
    // this.head = this.getByIndex(1);
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) {
      this.removeHead();
    }
    let prev = this.getByIndex(index - 1);
    // let next = this.getByIndex(index + 1);
    prev.next = prev.next.next;
    this.length--;
  }

  print() {
    let current = this.head;
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += current.value + " ---> ";
      current = current.next;
    }
    console.log(result, "null");
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...args) {
  let ll = new LinkedList();
  for (let i = args.length - 1; i >= 0; i--) {
    ll.insertAtHead(args[i]);
  }
  return ll;
};

// const ll = new LinkedList();
// ll.insertAtHead(10);
// ll.insertAtHead(20);
// ll.insertAtHead(30);
// ll.insertAtHead(40);

// console.log("ll: ", ll);
// console.log(ll.getByIndex(2));
// ll.print();

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.insertAtIndex(25, 2);
ll.print();
// console.log(ll.getByIndex(2).value);
// console.log(ll.removeHead());
// ll.removeHead();
// ll.print();

ll.removeAtIndex(2);
ll.print();
