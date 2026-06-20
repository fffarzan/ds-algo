const root = require("./binary-tree.js");

function bfs(root) {
  if (root === null) {
    return;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let currentNode = queue.shift();
      console.log("node", currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}

bfs(root);
