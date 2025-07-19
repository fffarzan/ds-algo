# Static Array
- Other name: Fixed size arrays.

## Time Complexity
- Read i-th element: O(1)
- Write i-th element: O(1)
- Remove i-th element: O(1)
- Shift or Insert Middle:  O(n) beacues we add a value at the first position of array and all other elenments should be shifted.
- Unshift or Remove Middle: O(n)

# Dynamic Array
- When we push a new value to a dynamic array, it allocate new piece of memory with double size of original array to overcome the problem of sizing. Then we copy old array data to new array and after all, we free up the memory by removing the old array.
- Why doubling the size? Creating a brand new array is O(n) and we want to reduce the cost of creating new arrays by adding new RAM space one by one. 

## Time Complexity
- Push (amortized = assuming we are doubling the size of array if we reach the full capacity of it): O(1)
- Pop: O(1)
- Read i-th element: O(1)
- Write i-th element: O(1)
- Remove i-th element: O(1)
- Shift or Insert Middle:  O(n) beacues we add a value at the first position of array and all other elenments should be shifted.
- Unshift or Remove Middle: O(n)