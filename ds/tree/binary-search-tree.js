// BINARY SEARCH TREE (BST) DATA STRUCTURE
// DESCRIPTION: 
//  It's like binary tree except that it's kinda sorted.
//  Sorted: Every node in left side has less value than the parent value and every node in right side has greater value
//  than the parent value.
//  If the tree is not balanced, the time complaxity will be O(n) because it's like a simple array.
//  If the tee is balanced, the time complexity will be O(logn).
//  Some people say O(h) that the h is the height of the tree.
//  Why we create BST and won't use just array? Because of inserting and deleting that in array are O(n) but in
//  BST are O(logn).

class TreeNode {
  constructor (val) {
    this.val = val; 
    this.left = null;
    this.right = null; 
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  
  insert (val) {
    let newNode = new TreeNode(val);
    
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  
  insertNode (node, newNode) {
    if (newNode.data < node.data) {
        if(node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
    }
  }
  
  // DESCRIPTION: The easiest way to binary search a tree, is with using recursion.
  search(val) {
    if (this.root === null) {
      return false;
    }
    
    let currNode = this.root;
    
    while (currNode) {
      if (val === currNode.val) {
        return true;
      } 
      
      if (val < currNode.val) {
        currNode = currNode.left;
      }
      
      if (val > currNode.val) {
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

BST.search(7);

// =================================================================

// Practice
// https://leetcode.com/problems/search-in-a-binary-search-tree/
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/