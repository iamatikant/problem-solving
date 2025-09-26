// (Interviewer mode on)

// "Alright Atikant, let's work on our last coding problem for this session.

// The problem is called Course Schedule."

// DSA Problem: Course Schedule
// Problem Statement:

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1] means that to take course 0, you must have already taken course 1. This represents a dependency relationship.

// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]

// Output: true

// Explanation: There are two courses. To take course 1 you should have finished course 0. The order [0, 1] is possible.

// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]

// Output: false

// Explanation: To take course 1 you need to take course 0, and to take course 0 you need to take course 1. This is a circular dependency and is impossible.

// Constraints:

// 1 <= numCourses <= 2000

// 0 <= prerequisites.length <= 5000

// prerequisites[i].length == 2

// 0 <= ai, bi < numCourses

// All the pairs prerequisites[i] are unique.

var canFinish = function (numCourses, prerequisites) {
  const map = new Map();
  const visited = new Set();
  const visiting = new Set();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  for (const sets of prerequisites) {
    const [course, pre] = sets;
    map.get(pre).push(course);
  }

  const cyclic = (course) => {
    if (visited.has(course)) {
      return false;
    }

    if (visiting.has(course)) {
      return true;
    }

    visiting.add(course);
    const items = map.get(course);

    for (let value of items) {
      if (cyclic(value)) {
        return true;
      }
    }

    visited.add(course);
    visiting.delete(course);
    return false;
  };

  for (let key of map.keys()) {
    if (cyclic(key)) {
      return false;
    }
  }

  return true;
};
