const { SingleLinkedNode, DoubleLinkedNode } = require('./single_node');

const list = new SingleLinkedNode(1, null);
const node2 = new SingleLinkedNode(2, null);
const node3 = new SingleLinkedNode(3, null);
const node4 = new SingleLinkedNode(4, null);
list.next = node2;
node2.next = node3;
node3.next = node4;

const printList = headNode => {
  while (headNode) {
    console.log(headNode.data);
    headNode = headNode.next
  }
}

const reverseSingleLinkedList = headNode => {
  let pre = null;
  let curr = headNode;
  while (curr) {
    const temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
}

// const r_list = reverseSingleLinkedList(list);
// printList(r_list);


const doubleList = new DoubleLinkedNode(1, null, null);
const dNode2 = new DoubleLinkedNode(2, null, null);
const dNode3 = new DoubleLinkedNode(3, null, null);
const dNode4 = new DoubleLinkedNode(4, null, null);

doubleList.pre = null;
doubleList.next = dNode2;

dNode2.pre = doubleList;
dNode2.next = node3;

dNode3.pre = node2;
dNode3.next = node4;

dNode4.pre = node3;
dNode4.next = null;

// printList(doubleList);

const reverseDoubleLinkedList = list => {
  let pre = null;
  let curr = list;
  while (curr) {
    const temp = curr.next;
    curr.next = pre;
    curr.pre = temp;
    pre = curr;
    curr = temp;
  }
  return pre;
}

const r_d_list = reverseDoubleLinkedList(doubleList);
printList(r_d_list)
