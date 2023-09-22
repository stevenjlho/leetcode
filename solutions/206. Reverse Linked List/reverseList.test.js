import LinkedList from "data-structure/linked-list/linkedList";
import reverseList from "./reverseList";

test("case 1", () => {
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.head = reverseList(list.head);
  expect(list.head.value).toBe(5);
});

test("case 2", () => {
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.head = reverseList(list.head);
  expect(list.head.value).toBe(2);
});
