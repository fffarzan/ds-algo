# Static Array

- Other name: Fixed size arrays.

## Time Complexity

- Read i-th element: O(1)
- Write i-th element: O(1)
- Remove i-th element: O(1)
- Shift or Insert Middle: O(n) beacues we add a value at the first position of array and all other elenments should be shifted.
- Unshift or Remove Middle: O(n)

### Practice

- [Remove Duplicates From Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | H
- [Remove Element](https://leetcode.com/problems/remove-element/) | E
- [Shuffle The Array](https://leetcode.com/problems/shuffle-the-array/) | M

# Dynamic Array

- When we push a new value to a dynamic array, it allocate new piece of memory with double size of original array to overcome the problem of sizing. Then we copy old array data to new array and after all, we free up the memory by removing the old array.
- Why doubling the size? Creating a brand new array is O(n) and we want to reduce the cost of creating new arrays by adding new RAM space one by one.

## Time Complexity

- Push (amortized = assuming we are doubling the size of array if we reach the full capacity of it): O(1)
- Pop: O(1)
- Read i-th element: O(1)
- Write i-th element: O(1)
- Remove i-th element: O(1)
- Shift or Insert Middle: O(n) beacues we add a value at the first position of array and all other elenments should be shifted.
- Unshift or Remove Middle: O(n)

### Practice

- [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) | E

# Stack

We can implement it using dynamic array.

- one of common use case of dynamic array.
- LIFO

## Time Complexity

- Push: O(1)
- Pop: O(1)
- Peek or Top: O(1)

### Practice

- [Baseball Game](https://leetcode.com/problems/baseball-game/) | E | Tested some aspects of performance
- [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | H
- [Min Stack](https://leetcode.com/problems/min-stack/) | E

# NeetCode

- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | E
- [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | E
- [Two Sum](https://leetcode.com/problems/two-sum/) | M
- [Group Anagrams](https://leetcode.com/problems/group-anagrams/) |
- [Top k Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | M
