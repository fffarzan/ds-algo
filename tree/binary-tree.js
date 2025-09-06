class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
const node5 = new Node(5);
const node15 = new Node(15);
const node3 = new Node(3);
const node7 = new Node(7);

root.left = node5;
root.right = node15;
node5.left = node3;
node5.right = node7;

console.log("binary tree:", root);
