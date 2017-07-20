//用js实现一个链表的数据结构，基本功能，增加、删除节点

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}


class Link {
  constructor() {
    this.header = null;
  }
  //增加节点
  addNode(value) {
    const node = new Node(value);
    let current = this.header;
    if(!current) {
      this.header = node;
    } else {
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  //删除节点
  delete(value) {
    let target = this.header;
    let pre;
    while (target.value !== value) {
      pre = target;
      target = target.next;
      if(!target) {
        return false;
      }
    }
    if(!target) {
      pre.next = null;
      return
    }
    if (!pre) {
      this.header = target.next || null;
      return
    }
    pre.next = target.next;
  }
}

var link = new Link();
link.addNode(1);
link.addNode(2);
link.addNode(3);
link.addNode(4);
link.addNode(5);
console.dir(link);
link.delete(7);
console.dir(link);




