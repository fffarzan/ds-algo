class Node {    
  constructor (val) {
    this.val = val;
    this.next = null;
  } 
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    const node = new Node(val);
    
    // if queue is empty
    if (this.head === null) {  
      this.head = node;
      this.tail = node;

      return;
    }

    this.tail.next = node;
    this.tail = node;

    return;
  }

  dequeue() {
    // if queue is empty
    if (this.head === null) { 
      return;
    }

    const val = this.head.val;
    this.head = this.head.next;
        
    return val;
  }

  print() {
    let curr = this.head;
    let str = '';
        
    while(curr !== null) {
      str = str + curr.val + '->';
      curr = curr.next;
    }
        
    return console.log(str);
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.print();