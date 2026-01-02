class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new TreeNode(val);

    // create the root node
    if (this.root === null) {
      this.root = newNode;

      return;
    }

    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    // trace the left side of the tree
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;

        return;
      }

      this.insertNode(node.left, newNode);

      return;
    }

    // trace the right side of the tree
    if (node.right === null) {
      node.right = newNode;

      return;
    }

    this.insertNode(node.right, newNode);
  }

  // The easiest way to binary search a tree, is with using recursion.
  search(val) {
    if (this.root === null) {
      return false;
    }

    let currNode = this.root;

    while (currNode) {
      if (currNode && currNode.val === val) {
        return true;
      }

      if (currNode && currNode.val > val) {
        currNode = currNode.left;
      }

      if (currNode && currNode.val < val) {
        currNode = currNode.right;
      }
    }

    return false;
  }
}

const BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

console.log("===============================================================");
console.log("BST:", BST.root);
console.log(`
           15
        /     \\
      10       25
     /  \\     /  \\
    7   13   22   27
   / \\      /
  5   9    17
`);
console.log("===============================================================");
console.log("is 25 exists:", BST.search(25));
console.log("is 8 exists:", BST.search(8));
console.log("===============================================================");

module.exports = BST.root;
