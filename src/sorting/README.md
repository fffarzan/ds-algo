# Sorting
-  It breaks the problem into several sub problems. For example, solve first two elements of the array sorted, then first three elements sorted and so on.
- We can solve it using recursion.
- Stable Sorting: Preserve the original order of elements. For example if you have two 7 in your array, it will arrange it 7s as the order of original.
- Unstable Sorting: There is no garantee to keep original order (opposite of above).

# Insertion Sort

## Time Complexity
- Best Case: O(n)
- Worst Case: O((n ^ 2) / 2)

### Practice
- [sort an array](https://leetcode.com/problems/sort-an-array/)

# Merge Sort
- Most common
- Divide & Conquer Technique: Spliting array to sub arrays till individual elements.
- It has recursions in itself obviously.
- Height of dividing: logn.
- We can code it to make it a stable sorting.

## Time Complexity
- O(nlogn). Because every level take O(n) to merge subarrays.

### Practice
- [sort an array](https://leetcode.com/problems/sort-an-array/)
- [merge k sorted lists](https://leetcode.com/problems/merge-k-sorted-lists/)

# Quick Sort
- Pivot Value: A value that is picked randomly and convinietly the most end value in array.
- It's not a stable sort by default.

## Time Complexity
- Average case: O(nlogn).
- Worst case: O(n ^ 2).

### Practice
- [sort an array](https://leetcode.com/problems/sort-an-array/)
- [kth largest element in an array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

# Bucket Sort
- It's very rare to use this kinda sort.
- When we use this sort that the problem guaranted that every value will be inside a finite limit range.
- It's unstable definitely.

## Time Complexity
- O(2n) => o(n).

## Space Complexity
- O(c) => O(1). Because of array hash we create for different elements.

### Practice
- [sort colors](https://leetcode.com/problems/sort-colors/) | E