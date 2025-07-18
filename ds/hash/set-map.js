// HASH SET/MAP DATA STRUCTURE

// DESCRIPTION:
//    SET: Kind of set of values.
//    MAP: A set of keys that mapped to different values.
//    INSERT TIME COMPLEXITY: average: O(1) --> In general: O(logn).
//    REMOVE TIME COMPLEXITY: average: O(1) --> In general: O(logn).
//    SEARCH TIME COMPLEXITY: average: O(1) --> In general: O(logn).
//    INORDER TRAVERSING TIME COMPLEXITY: average: O(nlogn).
//    SPACE COMPLEXITY: O(n).
//    Duplicates are mot allowed in hash map.
//    Creating a hash map from an array would be O(n) but for a tree map it would be O(nlogn). Every operation like
//      insert, remove and search takes logn for each value. Thus for array with n values, it takes nlogn time.

// ====================================================================================================================

// PROBLEM:
const problem = ['alice', 'brad', 'collin', 'brad', 'dylan', 'kim'];

// ====================================================================================================================

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

// ====================================================================================================================

// PRACTICE:
//    https://leetcode.com/problems/contains-duplicate/
//    https://leetcode.com/problems/two-sum/
//    https://leetcode.com/problems/lru-cache/

// ====================================================================================================================

// DESCRIPTION
//    Under the hood a hash map will implemented in an array: [index <--> key, value pair].
//    Even empty hash maps have at least two elements in array.
//    HASHING: 
//      We have a hashing function that take the key and convert it to an integer. Then we use that integer as 
//      index. That array is actually an array of object.
//      To create the hash, we map every character of key to an integer (ASCII) and then sum up all of characters to 
//      reach a final integer as hash.
//      For setting the key inside the array with size of n, we use: (hash number % n). The reminder is a vaild
//      index at the end.
//    GET: For getting value of a key from a hash map, we get the key, convert it to its hash, go to the hash map in
//      the specified size and find the value of target key.
//    HASHING COLLISION: Happens when two keys has same integer or same reminders. That happens. We can just work 
//      around them.
//    REHASHING: The process of doubled size of array (after reaching half-full array) to prevent collision.
//    We can use other methods to prevent collision in hashing like Linked List or Open Addressing but these ways are
//    also have some downsides.
//    We also use most nearest prime numbers when we want to double the size of array, for example we choose 7 instead 
//    of 8. Or for double size of 7, we use 17 instead of 14. It's been proved by math that prime numbers are better
//    in this case.

// ====================================================================================================================

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
    let hIndex = hash(key);

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

// ====================================================================================================================

// PRACTICE:
//    https://leetcode.com/problems/design-hashset/
//    https://leetcode.com/problems/design-hashmap/