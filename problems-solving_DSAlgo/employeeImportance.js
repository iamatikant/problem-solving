// 💼 Question: Employee Importance
// (Leetcode Medium | Amazon-style DFS problem)

// You have a list of Employee objects, each containing:

// id: unique employee ID

// importance: value of the employee

// subordinates: list of IDs of direct subordinates

// Task: Given an employee ID, return the total importance value of that employee and all their subordinates.

// 🧠 Signature:
// js
// Copy
// Edit
// function getImportance(employees, id) {
//   // employees: Array of objects: { id, importance, subordinates }
// }
// 📦 Example Input:
// js
// Copy
// Edit
// const employees = [
//   { id: 1, importance: 5, subordinates: [2, 3] },
//   { id: 2, importance: 3, subordinates: [] },
//   { id: 3, importance: 3, subordinates: [] }
// ];
// const id = 1;
// ✅ Expected Output:
// js
// Copy
// Edit
// 11  // 5 + 3 + 3
// 🧩 Tips:
// Use a Map for fast lookup: id → employee

// Use either DFS (recursion) or BFS (queue) to traverse the hierarchy

// When done, share your:

// ✅ Code

// 🧠 Thought process

// 🔍 Edge cases, if any

// Let’s go! 💪

const getImportance = (employees, eId) => {
  const map = new Map();
  let result = 0;
  employees.forEach(({ id, importance, subordinates }) => {
    map.set(id, {
      importance: (map.get(id) || 0) + importance,
      subordinates: [...(map.get(id)?.subordinates || []), ...subordinates],
    });
  });

  const helper = (empId) => {
    const empData = map.get(empId);
    const { importance, subordinates } = empData;
    result += importance;
    if (subordinates && subordinates.length > 0) {
      subordinates.forEach((sub) => helper(sub));
    }
  };

  helper(eId);
  return result;
};

const employees = [
  { id: 1, importance: 5, subordinates: [2, 3] },
  { id: 2, importance: 3, subordinates: [3] },
  { id: 3, importance: 3, subordinates: [] },
];

console.log(getImportance(employees, 2));
