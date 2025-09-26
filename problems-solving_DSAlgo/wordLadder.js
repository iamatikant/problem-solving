// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const visited = new Set();
  const adjacencyList = new Map(); // store h*t: ['hot', 'dot'...]

  // create a fast lookup map. by creating wild characters
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let temp = word;
      const prefix = temp.substring(0, i);
      const suffix = temp.substring(i + 1);
      temp = prefix + '*' + suffix;
      const value = adjacencyList.get(temp) || [];
      value.push(word);
      adjacencyList.set(temp, [...value]);
    }
  }

  let queue = [{ step: 1, word: beginWord }];

  while (queue.length > 0) {
    console.log('queue: ', queue);
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      const { step, word } = queue.shift();
      if (word === endWord) {
        return step;
      }
      for (let i = 0; i < word.length; i++) {
        let temp = word;
        const prefix = temp.substring(0, i);
        const suffix = temp.substring(i + 1);
        temp = prefix + '*' + suffix;
        const neighbors = adjacencyList.get(temp);
        if (neighbors && neighbors.length) {
          neighbors.forEach((item) => {
            if (!visited.has(item)) {
              visited.add(item);
              queue.push({ step: step + 1, word: item });
            }
          });
        }
      }
    }
  }

  return 0;
};

var ladderLength2 = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return 0; // Optimization: if endWord isn't in the list, it's impossible.
  }

  const adjList = new Map();
  // Pre-processing to build the adjacency list with wildcards
  wordList.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const genericWord = word.substring(0, i) + '*' + word.substring(i + 1);
      if (!adjList.has(genericWord)) {
        adjList.set(genericWord, []);
      }
      adjList.get(genericWord).push(word);
    }
  });

  // BFS setup
  const queue = [[beginWord, 1]]; // Queue stores [word, pathLength]
  const visited = new Set([beginWord]);

  while (queue.length > 0) {
    const [currentWord, pathLength] = queue.shift();

    if (currentWord === endWord) {
      return pathLength;
    }

    // Find neighbors using the pre-processed map
    for (let i = 0; i < currentWord.length; i++) {
      const genericWord =
        currentWord.substring(0, i) + '*' + currentWord.substring(i + 1);

      if (adjList.has(genericWord)) {
        for (const neighbor of adjList.get(genericWord)) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor); // Mark as visited WHEN enqueuing
            queue.push([neighbor, pathLength + 1]);
          }
        }
      }
    }
  }

  return 0; // Target was not reachable
};

const beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

console.log(ladderLength(beginWord, endWord, wordList));
console.log(ladderLength2(beginWord, endWord, wordList));

// const beginWord = '"nanny"',
//   endWord = 'aloud',
//   wordList =

// console.log(ladderLength(beginWord, endWord, wordList));
// console.log(ladderLength2(beginWord, endWord, wordList));
