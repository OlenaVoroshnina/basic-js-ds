const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

//  class ListNode {
//    constructor(x) {
//       this.value = x;
//       this.next = null;
//    }
// };
  
function removeKFromList(l, k) {
   // Create a dummy node to simplify removal of the head
  const dummy = new ListNode(0);
  dummy.next = l;

  let current = dummy;

  while (current.next !== null) {
    if (current.next.value === k) {
      // Remove the node with the value equal to k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return dummy.next; // The head of the modified linked list
}

module.exports = {
  removeKFromList
};
