// Implementation
class DynamicArray {
  constructor () {
    this.arr = new Array(2);
    this.capacity = 2
    this.length = 0
  }

  push (el) {
    if (this.length < this.capacity) {
      this.resize();
    }

    this.arr[this.length] = el;
    this.length++;

    return this;
  }

  pop () {
    if (this.length <= 0) {
      return;
    }

    this.length--;

    return this;
  }

  insert (i, el) {
    if (i > this.length && this.length != 0) {
      return;
    }

    this.arr[i] = el;
    this.length++;

    return this;
  }

  resize () {
    this.capacity = 2 * this.capacity;
    const newArr = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;

    return this;
  }

  get (i) {
    if (i >= this.length) {
      return;
    }

    console.log(this.arr[i]);
    return this.arr[i];
  }

  print () {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      str = str + this.arr[i] + ' ';
    }

    console.log(str);
  }
}

const dyanmicArr = new DynamicArray();
dyanmicArr.insert(0, 'a').insert(1, 'b').insert(2, 'c').push('d').pop('d').print();
dyanmicArr.get(2);
