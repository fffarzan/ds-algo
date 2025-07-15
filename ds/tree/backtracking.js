// BACKTRACKING ALGORITHM PATTERN

// PROBLEM: 
//    Determine if a path exists from the root of the tree to a leaf node. It may not contains any zeroes.

// DESCRIPTION:
//    It's based on DFS algorithm.
//    It's based on binary tree, not BST.
//    It's so similar to maze problem.
//    It's a kind of brute force algorithm, meaning we should try every possible way to find the solution.
//    TIME COMPLEXITY: O(n) if we have to track all the possibilaties in the maze.

// ====================================================================================================================

// BINARY TREE SAMPLE
class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(4);
const node0_1 = new Node(0);
const node1 = new Node(1);
const node7 = new Node(7);
const node2 = new Node(2);
const node0_2 = new Node(0);

root.left = node0_1;
root.right = node1;
node0_1.right = node7;
node1.left = node2;
node1.right = node0_2;

// console.log('binary tree:', root);

// SOLUTION:
//    For see is the maze has any solution or not.
//    It's like other recursive taversal trees.
//    At first, we try to reach to the leaf. Then we start to return back true or false based on our guards and our
//    needs.
function canReachLeaf (node) {
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

console.log('can reach leaf:', canReachLeaf(root));

// SOLUTION:
//    For see the solution of the maze.
//    We return true or false to indicate the correct path.
function leafPath (node, path) {
  if (node === null || node.val === 0) {
    return false;
  }

  path.push(node.val);

  console.log('leaf path:', path);

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

// ====================================================================================================================

// PRACTICE:
//    https://leetcode.com/problems/path-sum/
//    https://leetcode.com/problems/subsets/
//    https://leetcode.com/problems/combination-sum/