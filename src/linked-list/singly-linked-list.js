class ListNode {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    let listNode = new ListNode(-1); // dummy node
    this.head = listNode;
    this.tail = listNode;
  }

  insertEnd (val) {
    let listNode = new ListNode(val)
    this.tail.next = listNode;
    this.tail = listNode;
  }

  remove (index) {
    let curr = this.head;
    let i = 0;

    // iterating towrad the node before the target node
    while (i < index && curr != null) {
      i++;
      curr = curr.next;
    }

    // remove the target node
    if (curr !== null) {
      curr.next = curr.next.next;
    }
  }

  print () {
    let curr = this.head.next;
    let str = '';

    while (curr != null) {
      str += curr.val + '->';     
      curr = curr.next;
    }
    
    return console.log(str);
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.insertEnd(2);
singlyLinkedList.insertEnd(3);
singlyLinkedList.insertEnd(5);
singlyLinkedList.insertEnd(7);
singlyLinkedList.insertEnd(11);
singlyLinkedList.print();
singlyLinkedList.remove(3); // it's based on index
singlyLinkedList.print();