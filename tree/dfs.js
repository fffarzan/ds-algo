const root = require("./bst");

function inorder(root) {
  if (root === null) {
    return;
  }

  inorder(root.left);
  console.log("inorder:", root.val);
  inorder(root.right);
}

function inorderReversed(root) {
  if (root === null) {
    return;
  }

  inorderReversed(root.right);
  console.log("inorder reversed:", root.val);
  inorderReversed(root.left);
}

function preorder(root) {
  if (root === null) {
    return;
  }

  console.log("preorder:", root.val);
  preorder(root.left);
  preorder(root.right);
}

function postorder(root) {
  if (root === null) {
    return;
  }

  postorder(root.left);
  postorder(root.right);
  console.log("postorder:", root.val);
}

inorder(root);
inorderReversed(root);
preorder(root);
postorder(root);
