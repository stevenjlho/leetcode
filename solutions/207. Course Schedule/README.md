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
   - `queue.shift()` removes the first course from the queue and assigns it to `course`. This course has no prerequisites and can be considered completed.
   - `count++` increments the count of completed courses. If this count equals the total number of courses by the end of the process, it means all courses can be completed.
   - Retrieve all courses dependent on the current course that is dequeued from the `queue` and iterate over each of them. If there are no dependent courses, an empty array (`[]`) is used to avoid null references.
      - For each dependent course (`nextCourse`), the algorithm reduces its `inDegree` by 1. This is because completing `course` satisfies one of `nextCourse`'s prerequisites.
      - If reducing the `inDegree` results in `nextCourse` having no more prerequisites, it means `nextCourse` can now be taken. Therefore, `nextCourse` is added to the `queue`.
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
  // Process courses
  while (queue.length) {
    const course = queue.shift(); // Take course with no prerequisites
    count++; // Increment completed courses

    // Process dependent courses
    (map.get(course) || []).forEach((nextCourse) => {
      inDegree[nextCourse]--; // Remove prerequisite
      if (inDegree[nextCourse] === 0) queue.push(nextCourse); // If no more prerequisites, enqueue
    });
  }

  return count === numCourses; // Check if all courses have been processed};
};
```
