// Remove Duplicates from Sorted List
//
// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = (head) => {
    if (!head || !head.next) {
        return head;
    }
    var headNode = head;
    while (head && head.next) {
        var nextNode = head.next;
        if (head.val === nextNode.val) {
            head.next = nextNode.next;
        } else {
            head = nextNode;
        }
    }
    return headNode;
};

export default deleteDuplicates;
