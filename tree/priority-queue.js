// PRIORITY QUEUE (HEAP) DATA STRUCTURE

// DESCRIPTION:
//    It's based on ordering queue considering some priorities.
//    We can have duplicate values. It's OK.
//    Two variatins: Min priority | Max priority.
//    The point of having heap is finding min of max number as soon as possible.
//    The priority queue is implemented by binary heap.
//    BINARY HEAP: 
//        1- It's a complete binary tree: Means in all levels there is no hole and all nodes are available except that
//        last level (leaf level). Also missing nodes in leaf level should be at the end (right side) of the level 
//        (order property).
//        2- All values in subtree should be less than value of the parent node (structure property).
//    It will be implemented under the hood using array. With these formulaes:
//      - the first index (index 0) is empty and from index 1 we start to fill array
//      - left child = 2 * i
//      - right child = (2 * i) + 1
//      - parent = i / 2

// ====================================================================================================================

// ... should be continued in pushing to and poping from heap ...