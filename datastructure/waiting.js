class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.waiting = 0;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? `no lines, go a head` : this.waiting);

  enqueue = (groubNumber) => {
    if (this.isFull()) {
      console.log(
        `ohh no its full, but you can wait for ${this.waiting} and we can let you queue`
      );
    } else {
      let gn = groubNumber;
      while (gn > 12) {
        this.addMemeber(12);
        gn -= 12;
      }
      this.addMemeber(gn);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.waiting -= removed.groupSize * (30 / 60);
      return removed.groupSize;
    }
  };

  //prompt to add members to array if member <=12 and calcalte length*30
  //create a new node and add the array to the queue if length <=4
  //calculate the total of returned array secons of all nodes
  addMemeber = (noOf) => {
    const newMember = new Node(noOf);

    if (this.isEmpty()) {
      this.front = newMember;
    } else this.back.next = newMember;

    this.back = newMember;
    this.length++;
    this.waiting += noOf * (30 / 60);
  };
}

const groupy = new Queue(4);
console.log(groupy.peek());
groupy.enqueue(10);
console.log(groupy.peek());
groupy.enqueue(20);

console.log(groupy.peek());
groupy.enqueue(10);
console.log(groupy.peek());
//remove from queue
console.log(groupy.dequeue());
console.log(groupy.dequeue());
console.log("queue has ", groupy.waiting * 2);
console.log(groupy.peek());
