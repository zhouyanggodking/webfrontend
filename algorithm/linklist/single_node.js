class SingleLinkedNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class DoubleLinkedNode {
  constructor(data, pre, next) {
    this.data = data;
    this.pre = pre;
    this.next = next;
  }
}

module.exports = {
  SingleLinkedNode,
  DoubleLinkedNode
}
