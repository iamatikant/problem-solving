// 207. Course Schedule
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/*var canFinish = function (numCourses, prerequisites) {
  const courseMap = new Map();
  for (let [course, pre] of prerequisites) {
    const currentPre = courseMap.get(course) || [];
    courseMap.set(course, [...currentPre, pre]);
  }

  const visitedSet = new Set();

  const DFS = (key) => {
    if (visitedSet.has(key)) {
      return true;
    } else {
      visitedSet.add(key);
      const pre = courseMap.get(key);
      pre?.forEach((element) => {
        DFS(element);
        return false;
      });
    }
  };

  const courses = [...courseMap.keys()];
  for (let key of courses) {
    const isCircle = DFS(key);
    if (isCircle) {
      return false;
    }
    visitedSet.clear();
  }
  return true;
};*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// var canFinish = function (numCourses, prerequisites) {
//   // 1. Build the adjacency list to represent the graph.
//   // The map will store: course -> [list of courses that require it as a prerequisite]
//   // So for [0, 1], the edge is 1 -> 0.
//   const adjList = new Map();
//   for (let i = 0; i < numCourses; i++) {
//     adjList.set(i, []);
//   }
//   for (const [course, prereq] of prerequisites) {
//     adjList.get(prereq).push(course);
//   }

//   // 2. Initialize two sets for tracking node states.
//   // 'visiting' tracks nodes in the current recursive path. If we see a node in here, it's a cycle.
//   const visiting = new Set();
//   // 'visited' tracks nodes that have been fully explored and are known to be safe (part of a non-cyclic path).
//   // This is a performance optimization to avoid re-visiting safe nodes.
//   const visited = new Set();

//   // 3. Define the recursive DFS function. It will return 'true' if a cycle is found, 'false' otherwise.
//   function hasCycle(course) {
//     // --- Check for a cycle ---
//     // If we are currently visiting this node in this same path, we've found a back edge. It's a cycle.
//     if (visiting.has(course)) {
//       return true; // Cycle detected!
//     }

//     // --- Check for already-completed nodes (optimization) ---
//     // If this node was part of a previous, completed DFS path, we know it's safe. No need to explore again.
//     if (visited.has(course)) {
//       return false; // No cycle found here.
//     }

//     // --- Mark this node as part of the current path ---
//     visiting.add(course);

//     // --- Explore neighbors ---
//     const neighbors = adjList.get(course);
//     for (const neighbor of neighbors) {
//       // If any recursive call finds a cycle, propagate the result up immediately.
//       if (hasCycle(neighbor)) {
//         return true; // Cycle detected downstream.
//       }
//     }

//     // --- Backtrack ---
//     // If the loop completes, it means no cycles were found starting from this 'course'.
//     // We can remove it from the 'visiting' path and add it to the 'visited' set
//     // to mark it as permanently safe.
//     visiting.delete(course);
//     visited.add(course);

//     // Return false, indicating no cycle was found from this path.
//     return false;
//   }

//   // 4. Main loop: Iterate through all courses to handle disconnected parts of the graph.
//   for (let i = 0; i < numCourses; i++) {
//     // Call DFS for each course. If it ever finds a cycle, we can stop and return false.
//     if (hasCycle(i)) {
//       return false;
//     }
//   }

//   // If we get through all courses without ever finding a cycle, we can finish.
//   return true;
// };

var canFinish = function (numCourses, prerequisites) {
  const map = new Map();
  const visiting = new Set();
  const visited = new Set();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  for (let [course, prereq] of prerequisites) {
    map.get(prereq).push(course);
  }

  const dfs = (course) => {
    if (visiting.has(course)) {
      return true;
    }

    if (visited.has(course)) {
      return false;
    }

    const courses = map.get(course);
    for (let item of courses) {
      dfs(item);
      visiting.add(item);
    }

    visiting.delete(course);
    visited.add(course);
  };

  for (let [course, prereq] of prerequisites) {
    if (dfs(course)) {
      return false;
    }
  }

  return true;
};

const prerequisites = [
  [1, 0],
  [1, 2],
  [2, 0],
];

console.log(canFinish(6, prerequisites));
