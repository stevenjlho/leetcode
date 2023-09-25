import { expect, test } from "bun:test";
import LinkedList from "mnemonist/linked-list";
import reverseList from "./reverseList";

test("case 1", () => {
  var list = LinkedList.from([1, 2, 3, 4, 5]);
  list.head = reverseList(list.head);
  expect(list.toArray()).toEqual([5, 4, 3, 2, 1]);
});

test("case 2", () => {
  var list = LinkedList.from([1, 2]);
  list.head = reverseList(list.head);
  expect(list.toArray()).toEqual([2, 1]);
});
