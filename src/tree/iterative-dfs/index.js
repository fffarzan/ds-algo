const root = require("./binary-tree");

function inorder(root) {
  let stack = [];
  let currentPointer = root;

  while (currentPointer !== null || stack.length !== 0) {
    if (currentPointer !== null) {
      stack.push(currentPointer);
      currentPointer = currentPointer.left;
    } else {
      currentPointer = stack.pop();
      console.log(currentPointer.val);
      currentPointer = currentPointer.right;
    }
  }
}

function preorder(root) {
  let stack = [];
  let currentPointer = root;

  while (currentPointer !== null || stack.length !== 0) {
    if (currentPointer !== null) {
      console.log(currentPointer.val);

      if (currentPointer.right !== null) {
        stack.push(currentPointer.right);
      }

      currentPointer = currentPointer.left;
    } else {
      currentPointer = stack.pop();
    }
  }
}

function postorder(root) {
  let stack = [root];
  let visit = [false];

  while (stack.length != 0) {
    let currentPointer = stack.pop();
    let visited = visit.pop();

    if (currentPointer != null) {
      if (visited) {
        console.log(currentPointer.val);
      } else {
        stack.push(currentPointer);
        visit.push(true);
        stack.push(currentPointer.right);
        visit.push(false);
        stack.push(currentPointer.left);
        visit.push(false);
      }
    }
  }
}
