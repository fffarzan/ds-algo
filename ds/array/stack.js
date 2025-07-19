class Stack {
  constructor() {
    this.stack = [];
  }

  push (el) {
    this.stack.push(el);

    return this;
  }

  pop () {
    this.stack.pop();

    return this;
  }

  size () {
    return this.stack.length
  }

  print () {
    console.log(this.stack)
  }
}

const stack = new Stack();

stack.push(1).push(2).push(3).print(); // [ 1, 2, 3 ]
stack.pop().print(); // [ 1, 2 ]
console.log(stack.size()) // 2

// PRACTICE:
// https://leetcode.com/problems/baseball-game/
// https://leetcode.com/problems/valid-parentheses/
// https://leetcode.com/problems/min-stack/
// Visit https://neon.rip/