var reverseList = (head) => {
  let currentNode = head;
  let tempNext = null;
  let prevNode = null;

  while (currentNode !== null) {
    tempNext = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = tempNext;
  }

  return prevNode;
};

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let nextTemp = null;

  while (curr !== null) {
    nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};
