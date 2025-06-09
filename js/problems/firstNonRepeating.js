// There are multiple visits to a website by different users.
// Define a function postUserVisit that received id of the visiting user everytime any user visits
// Define a function getFirstOneTimeVisitedUser that returns the first user that visited only once

// Each user has it's own unique id.

class userTracking {
  constructor() {
    this.user = [];
    this.map = new Map();
  }

  pushUserVisits(id) {
    this.user.push(id);
    this.map.set(id, (this.map.get(id) || 0) + 1);
  }

  getFirstUserVisit() {
    for (let element of this.user) {
      if (this.map.get(element) === 1) {
        return element;
      } else {
        this.user.shift();
      }
    }
    return null;
  }
}

const user = new userTracking();

const visits = [1, 2, 3, 4, 1, 2, 3, 5, 6, 4];

[1, 2, 3, 4, 1, 2, 3, 5, 6, 4].forEach((element) => {
  user.pushUserVisits(element);
});

console.log("result: ", user.getFirstUserVisit());

// getFirstUserVisit() {
//   while (this.queue.length > 0 && this.map.get(this.queue[0]) > 1) {
//     this.queue.shift(); // remove users who visited more than once
//   }
//   return this.queue.length > 0 ? this.queue[0] : null;
// }

// {
//   1: { id: 1, name: "Electronics", checked: false, parent: null, child: [2, 5] },
//   2: { id: 2, name: "Mobile phones", checked: false, parent: 1, child: [3, 4] },
//   3: { id: 3, name: "iPhone", checked: false, parent: 2, child: [] },
//   4: { id: 4, name: "Android", checked: false, parent: 2, child: [] },
//   5: { id: 5, name: "Laptops", checked: false, parent: 1, child: [6, 7] },
//   6: { id: 6, name: "MacBook", checked: false, parent: 5, child: [] },
//   7: { id: 7, name: "Surface Pro", checked: false, parent: 5, child: [] },
//   8: { id: 8, name: "Books", checked: false, parent: null, child: [9, 10] },
//   9: { id: 9, name: "Fiction", checked: false, parent: 8, child: [] },
//   10: { id: 10, name: "Non-fiction", checked: false, parent: 8, child: [] },
//   11: { id: 11, name: "Toys", checked: false, parent: null, child: [] }
// }
