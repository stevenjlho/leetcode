
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    let prev = null;
    let current = head;
    while(current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
};

export default reverseList;