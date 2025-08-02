// BINARY TREE DATA STRUCTURE

// DESCRIPTION:
//    It's structurely similar to doubled linked list.
//    We say left child and right child of a parent node.
//    We can't have any cylces in binary trees.
//    CHILD NODE
//    PARENT NODE
//    SIBLING NODES
//    LEAF NODE: A The last child that hasn't any children.
//    ROOT NODE: The most top parent node.
//    DECENDANT NODES: Any nodes beneath of a special node to leaf nodes.
//    ANCESTOR NDOES: Any nodes of parent chain of a special node to root node.
//    HEIGHT: The number of nodes going down from a special node to a leaf node.
//    DPETH: The number of nodes going up from a spcial node to root node.

// ====================================================================================================================

// SAMPLE:
class Node {
  constructor (val) {
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

console.log('binary tree:', root);

// ====================================================================================================================
