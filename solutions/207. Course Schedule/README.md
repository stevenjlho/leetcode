# [207. Course Schedule](https://leetcode.com/problems/course-schedule/description/)

## Intuition

The approach uses the concept of **Topological Sorting**, ensuring that for each course (node), all its prerequisites (incoming edges) are met before it can be "taken".

## Approach

1. Create an array `inDegree` to track the number of prerequisites (incoming edges) for each course.
2. Use a `Map` for the adjacency list, where each key is a course and its value is a list of courses that depend on it.
3. Iterate over the `prerequisites` array.
   - For each pair `[course, prereq]`, increment the in-degree of `course` and update the adjacency list (map) by adding `course` to the list of courses that `prereq` unlocks.
4. Initialize an empty queue to keep track of courses with no prerequisites (in-degree 0). These are the courses we can start with.
5. Iterate over `inDegree`. If `degree` is zero, it means the course at this index has no prerequisites and can be taken immediately.
6. Use a variable `count` to track the number of courses that can be completed.
7. Process until there are no more courses to take.
   - Increment `count`, indicating another course has been completed.
   - Retrieve all courses dependent on the current course that is dequeued from the `queue`.
   - If there are dependent courses (`if (dependentCourses)`), iterate over each of them:
      - Decrement their in-degree by 1, indicating that one of its prerequisite courses has been completed.
      - If a dependent course's in-degree drops to 0, enqueue it, signifying it's ready to be taken. 
8. If the count of processed courses equals numCourses, return true; otherwise, false.

## Complexity

- Time complexity: O(N + P), where N is the number of courses, and P is the number of prerequisites. This complexity arises from iterating over all courses and their prerequisites.
- Space complexity: O(N + P), mainly for the graph representation and the in-degree array.

## Code

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0); // Array for tracking in-degrees of each course
  const map = new Map(); // Adjacency list for representing the graph

  // Build the graph and fill the in-degree array
  prerequisites.forEach(([course, prereq]) => {
    inDegree[course]++;
    if (map.has(prereq)) {
      map.get(prereq).push(course); // Add course as dependent on prereq
    } else {
      map.set(prereq, [course]); // Initialize the adjacency list for prereq
    }
  });

  const queue = []; // Queue for courses that can be taken
  inDegree.forEach((degree, index) => {
    if (degree === 0) queue.push(index); // Courses with no prerequisites
  });

  let count = 0; // Count of courses that can be completed
  while (queue.length) {
    count++;
    const course = queue.shift(); // Current course taken
    const dependentCourses = map.get(course); // Courses dependent on the current course
    if (dependentCourses) {
      dependentCourses.forEach((dependentCourse) => {
        inDegree[dependentCourse]--; // Decrement in-degree of dependent course
        if (inDegree[dependentCourse] === 0) {
          queue.push(dependentCourse); // If no more prerequisites, add to queue
        }
      });
    }
  }

  return count === numCourses; // Check if all courses have been processed};
};
```
