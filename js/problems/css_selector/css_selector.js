// Input:
// <div id="root">
//   <article>Prepare for interview</article>
//   <section>
//     on
//     <p>
//       <span>
//         Learnersbucket
//         <button>click me!</button>
//         <button id="target">click me!</button>
//       </span>
//     </p>
//   </section>
// </div>

// const root = document.getElementById("root");
// const target = document.getElementById("target");
// console.log(generateSelector(root, target));

// // Output:
// // "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"

function generateSelector(root, target) {
  const cssSelector = [];
  while (root !== target) {
    const parentElement = target.parentNode;
    console.log("parentElement: ", parentElement);
    const index = Array.from(parentElement.children).indexOf(target) + 1;
    const tagName = target.tagName.toLowerCase();
    cssSelector.unshift(`${tagName}:nth-child(${index})`);
    target = parentElement;
    console.log("index: ", index);
  }
  const rootTag = root.tagName.toLowerCase();
  const id = root.getAttribute("id");
  cssSelector.unshift(`${rootTag}[id='${id}']`);
  const selector = cssSelector.join(" > ");
  document.querySelector(selector).style.background = "red";
  return selector;
}

/**
 *
 * Input: */
// const input = (
//   <div id="root">
//     <article>Prepare for interview</article>
//     <section>
//       on
//       <p>
//         <span>
//           Learnersbucket
//           <button>click me!</button>
//           <button id="target">click me!</button>
//         </span>
//       </p>
//     </section>
//   </div>
// );

// const root = document.getElementById("root");
// const target = document.getElementById("target");
// console.log(generateSelector(root, target));

// Output:
// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"

// function generateSelector(root, target) {
//   const currentId = root.getAttribute("id");
//   return findPath(root, 0, target, `div[id=${currentId}] > `);
// }

// function findPath(currentNode, currentNodeCount, target, path) {
//   if (
//     currentNodeCount >= currentNode.childNodes.length ||
//     currentNode == undefined
//   ) {
//     return "";
//   }
//   path =
//     path +
//     currentNode.tagName.toLowerCase() +
//     ` > :nth-child(${currentNodeCount + 1})`;
//   if (currentNode == target) {
//     return path;
//   }
//   path = path + findPath(currentNode.childNodes[currentNodeCount], 0, target);
//   path = path + findPath(currentNode, currentNodeCount + 1, target);
//   return path;
// }
