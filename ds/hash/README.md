# Hash Set/Map
- SET: Kind of set of values.
- MAP: A set of keys that mapped to different values.
- Duplicates are mot allowed in hash map.

## Time Complexity
- Insert: average: O(1) | in general: O(logn).
- Search: average: O(1) | in general: O(logn).
- Remove: average: O(1) | in general: O(logn).
- Inorder Traversing: average: O(nlogn).
- Creating a hash map from an array would be O(n) but for a tree map it would be O(nlogn). Every operation like insert, remove and search takes logn for each value. Thus for array with n values, it takes nlogn time.

## Space Complexity
O(n).

### Practice
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- [Two Sum](https://leetcode.com/problems/two-sum/)
- [Lru Cache](https://leetcode.com/problems/lru-cache/)

## Hash Map Implementation
- Under the hood a hash map will implemented in an array: [index <--> key, value pair].
- Even empty hash maps have at least two elements in array.
- HASHING: We have a hashing function that take the key and convert it to an integer. Then we use that integer as index. That array is actually an array of object.To create the hash, we map every character of key to an integer (ASCII) and then sum up all of characters to reach a final integer as hash. For setting the key inside the array with size of n, we use: (hash number % n). The reminder is a vaild index at the end.
- GET: For getting value of a key from a hash map, we get the key, convert it to its hash, go to the hash map in the specified size and find the value of target key.
- HASHING COLLISION: Happens when two keys has same integer or same reminders. That happens. We can just work around them.
- REHASHING: The process of doubled size of array (after reaching half-full array) to prevent collision.
- We can use other methods to prevent collision in hashing like Linked List or Open Addressing but these ways are also have some downsides.
- We also use most nearest prime numbers when we want to double the size of array, for example we choose 7 instead of 8. Or for double size of 7, we use 17 instead of 14. It's been proved by math that prime numbers are better in this case.

### Practice
- [Design Hashset](https://leetcode.com/problems/design-hashset/)
- [Design Hashmap](https://leetcode.com/problems/design-hashmap/)