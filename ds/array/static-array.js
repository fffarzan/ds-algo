// Implementation
class StaticArray {
  constructor (arr, length) {
    this.arr = arr;
    this.length = length;
  }

  insertEnd (el, newCapacity) {
    if (this.length >= newCapacity) {
      return;
    }

    this.arr[this.length] = el;
    this.length++;

    return this;
  }

  removeEnd () {
    if (this.length < 0) {
      return;
    }

    this.arr[this.length - 1] = 0;

    return this;
  }

  insertMiddle (index, el) {
    // unshift from middle to end
    for (let i = this.length - 1; i > index - 1; i--) {
      this.arr[i + 1] = this.arr[i];
    }

    this.arr[index] = el;

    return this;
  }

  removeMiddle (index) {
    // shift from middle to end
    for (let i = index + 1; i < this.length; i++) {
      this.arr [i - 1] = this.arr[i];
    }

    this.arr[index] = 0;

    return this;
  }

  print () {
    let str = '';
        
    for (let i = 0; i < this.length; i++) {
      str = str + this.arr[i] + ' ';
    }      
    
    console.log(str);
  }
}

const staticArray = new StaticArray(['a', 'b', 'c'], 3);

staticArray.insertEnd('d', 4).print(); // a b c d
staticArray.removeEnd().print(); // a b c 0
staticArray.insertMiddle(1, 'd').print(); // a d b c
staticArray.removeMiddle(2).print(); // a d 0 c