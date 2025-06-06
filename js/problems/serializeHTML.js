// function serializeHTML(element) {
//   let tab = "";
//   function doSerialize(element, tab) {
//     let serializedHTMLString = "";
//     if (typeof element === "object") {
//       serializedHTMLString = `${serializedHTMLString}${tab}<${element.tag}>`;
//       if (element.children) {
//         element.children.forEach((child) => {
//           serializedHTMLString = serializedHTMLString + "\n";
//           if (typeof child === "object") {
//             serializedHTMLString =
//               serializedHTMLString + doSerialize(child, tab + "\t");
//           } else {
//             serializedHTMLString = `${serializedHTMLString}${tab}\t${child}`;
//           }
//         });
//         serializedHTMLString = `${serializedHTMLString}\n${tab}</${element.tag}>`;
//       }
//     }
//     return serializedHTMLString;
//   }
//   return doSerialize(element, tab);
// }

/**
 * @param {Object} element
 * @return {string}
 */
function serializeHTML(element) {
  const lines = [];

  const serialize = (node, indent = "") => {
    if (typeof node === "string") {
      lines.push(`${indent}${node}`);
      return;
    }

    const { tag, children = [] } = node;

    if (tag) {
      lines.push(`${indent}<${tag}>`);
    }
    const newIndent = indent + "\t";
    if (children.length > 0) {
      for (let element of children) {
        serialize(element, newIndent);
      }
    }
    lines.push(`${indent}</${tag}>`);
  };

  serialize(element);
  return lines.join("\n");
}

const tree = {
  tag: "body",
  children: [
    {
      tag: "div",
      children: [{ tag: "span", children: ["foo", "bar", "this"] }],
    },
    { tag: "div", children: ["baz"] },
  ],
};

// const tree = { children: ["bar1", "bar2"], tag: "span" };

console.log(serializeHTML(tree));
