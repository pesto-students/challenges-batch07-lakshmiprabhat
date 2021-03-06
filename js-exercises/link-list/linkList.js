import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const node = new LinkListNode(value);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  delete(value) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.value === value) {
        if (previous == null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  traverse() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  length() {
    let curr = this.head;
    let count = 0;
    while (curr) {
      count += 1;
      curr = curr.next;
    }
    return count;
  }
}

export { LinkList };
