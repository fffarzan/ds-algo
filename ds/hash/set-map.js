// PROBLEM:
const problem = ['alice', 'brad', 'collin', 'brad', 'dylan', 'kim'];




// SAMPLE
const countMap = {};

function createHashMap (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]]) {
      countMap[arr[i]]++;
      continue;
    }

    countMap[arr[i]] = 1;
  }
}

createHashMap(problem);

console.log('hash map:', countMap);




// IMPLEMENTING A HASH
class Pair {
  constructor (key, val) {
    this.key = key;
    this.val = val
  }
}

class HashMap {
  constructor () {
    this.size = 0;
    this.capacity = 2;
    this.hMap = Array(this.capacity).fill(null);
  }

  print () {
    for (let i = 0; i < this.hMap.length; i++) {
      if (this.hMap[i]) {
        console.log(`${this.hMap[i].key} ${this.hMap[i].value}`);
      }
    }
  }

  hash (key) {
    let hashNum = 0;

    for (let i = 0; i < key.length; i++) {
      hashNum = hashNum + key.charCodeAt(i); 
    }

    return hashNum % this.capacity;
  }

  // getting value of key
  get (key) {
    let hIndex = this.hash(key);

    while (this.hMap[hIndex] !== null) {
      if (this.hMap[hIndex].key === key) {
        return this.hMap[hIndex].val;
      }

      hIndex++;
      hIndex = hIndex % this.capacity;
    }

    return null;
  }

  // putting value or key and value
  put (key, val) {
    let hIndex = this.hash(key);

    while (true) {
      if (this.hMap[hIndex] === null) {
        this.hMap[hIndex] = new Pair(key, val);
        this.size++;
        
        if (this.size >= this.capacity / 2) {
          this.rehash();
        }
        
        return;
      } else if (this.hMap[hIndex].key === key) {
        this.hMap[hIndex].val = val;
                
        return;
      }
      
      hIndex++;
      hIndex = hIndex % this.capacity;
    }  
  }

  rehash () {
    this.capacity = 2 * this.capacity;
    let newHMap = new Array(this.capacity).fill(null);
    let oldHMap = this.hMap;
    this.hMap = newHMap;
    this.size = 0;

    for (let i = 0; i < oldHMap.length; i++) {
      if (oldHMap[i]) {
          this.put(oldHMap[i].key, oldHMap[i].val);
      }
    }
  }

  remove(key) {
    if (this.get(key) === null) {
      return;
    }
        
    let hIndex = this.hash(key);

    while (true) {
      if (this.hMap[hIndex].key === key) {
        // Removing an element using open-addressing actually causes a bug, because we may create a hole in the array,
        // and our get() may get in trouble. 
        this.hMap[hIndex] = null;
        this.size--;

        return;
      }

      hIndex++;
      hIndex = hIndex % this.capacity;
    }
  }
}

const hMap = new HashMap();
hMap.put('a', 2);
hMap.put('b', 5);
hMap.put('c', 1);
console.log(hMap);
hMap.remove('b');
console.log(hMap);
console.log(hMap.get('a'));
