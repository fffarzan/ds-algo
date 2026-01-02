const root = require("../tree/binary-tree");

// SOLUTION:
//    For see is the maze has any solution or not.
//    It's like other recursive taversal trees.
//    At first, we try to reach to the leaf. Then we start to return back true or false based on our guards and our
//    needs.
function canReachLeaf(node) {
  if (node === null || node.val === 0) {
    return false;
  }

  if (node.left === null && node.right === null) {
    return true;
  }

  if (canReachLeaf(node.left)) {
    return true;
  }

  if (canReachLeaf(node.right)) {
    return true;
  }

  return false;
}

console.log("can reach leaf:", canReachLeaf(root));

// SOLUTION:
//    For see the solution of the maze.
//    We return true or false to indicate the correct path.
function leafPath(node, path) {
  if (node === null || node.val === 0) {
    return false;
  }

  path.push(node.val);

  console.log("leaf path:", path);

  if (node.left === null && node.right === null) {
    return true;
  }

  if (leafPath(node.left, path)) {
    return true;
  }

  if (leafPath(node.right, path)) {
    return true;
  }

  path.pop();
  return false;
}

leafPath(root, []);
