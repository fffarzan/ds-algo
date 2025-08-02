class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertFront (val) {
    
  }

  insertEnd (val) {
    
  }

  removeFront () {
    
  }

  removeEnd () {

  }

  print () {
    let curr = this.head.next;
    let str = "";

    while (curr != null) {
      str += curr.val + "->";     
      curr = curr.next;
    }
    
    return console.log(str);
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print()