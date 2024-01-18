# [207. Course Schedule](https://leetcode.com/problems/course-schedule/description/)

## Intuition

The approach uses the concept of **Topological Sorting**, ensuring that for each course (node), all its prerequisites (incoming edges) are met before it can be "taken."

## Approach

1. Create an array `inDegree` to track the number of prerequisites (incoming edges) for each course.
2. Use a `Map` to represent the graph. Each entry in the map has a course as the key and a list of courses that depend on it as the value.
3. For each prerequisite pair, increment the in-degree of the course and update the adjacency list.
4. Initialize an empty queue. Add all courses with no prerequisites (in-degree of 0) to this queue.
5. Initialize `count` to track the courses that can be completed.
6. The loop continues as long as there are courses in the queue.
   - Remove a course from the queue. This course is now considered "taken" or "completed".
   - Increment the count of courses that have been successfully processed.
   - Retrieve the list of courses that directly depend on the current course. These are the courses for which the current course is a prerequisite.
   - If there are dependent courses (`if (dependentCourses)`), iterate over each of them:
     - Decrease the in-degree of the dependent course. This action simulates removing the prerequisite (the current course) from the dependent course.
     - After reducing the in-degree, check if the dependent course now has no remaining prerequisites.
       - If so (`inDegree[dependentCourse] === 0`), it means this course can now be taken. Therefore, it's added to the queue.
7. If the count of processed courses equals numCourses, return true; otherwise, false.

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
      map.get(prereq).push(course); // Add course to the list of courses dependent on prereq
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
    const course = queue.shift(); // Current course taken
    count++;
    const dependentCourses = map.get(course); // Courses dependent on the current course
    if (dependentCourses) {
      dependentCourses.forEach((dependentCourse) => {
        inDegree[dependentCourse]--;
        if (inDegree[dependentCourse] === 0) {
          queue.push(dependentCourse); // If no more prerequisites, add to queue
        }
      });
    }
  }

  return count === numCourses; // Check if all courses have been processed};
};
```
