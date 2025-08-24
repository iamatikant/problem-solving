// DSA Problem: Minimum Knight Moves
// Problem Statement:

// You are given an infinite chessboard. A knight is at square [0, 0].

// Given a target destination [x, y], return the minimum number of moves required for the knight to reach the target.

// Example 1:

// Input: x = 2, y = 1

// Output: 1

// Explanation: The knight can move from (0, 0) to (2, 1) in a single move.

// Example 2:

// Input: x = 5, y = 5

// Output: 4

// Constraints:

// The absolute values of x and y will not exceed 300.

// (Interviewer mode)

// "Take a moment to think about it. What kind of algorithm does this 'minimum number of moves' or 'shortest path' problem suggest to you?"

// 4,4
// --> [6,5],
//  --> [5, 6],
//  [3, 6],
//  [2, 5],
//  --> [2, 3],
//  [3, 2],
//  --> [6, 3],
//  [5, 2]

function minKnightMoves(targetX, targetY) {
  const visited = new Map();
  const getKnightMoves = (x, y, steps, boardSize = 300) => {
    const nextStep = steps + 1;
    const moves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];
    let result = [];
    result = moves
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(
        ([nx, ny]) => nx > 0 && nx <= boardSize && ny > 0 && ny <= boardSize
      );
    result = result.filter(([x, y]) => {
      const key = [x, y].toString();
      if (!visited.has(key)) {
        return [x, y];
      }
    });
    result = result.map(([x, y]) => {
      visited.set([x, y].toString(), true);
      return { x: x, y: y, steps: steps + 1 };
    });

    return result;
  };

  const queue = [{ x: 0, y: 0, steps: 0 }];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.x === targetX && current.y === targetY) {
      return current.steps;
    }
    queue.push(...getKnightMoves(current.x, current.y, current.steps));
  }
  return -1;
}

console.log(minKnightMoves(5, 5));
