// // Load and instantiate Chance
// var chance = require("chance").Chance();

// // Use Chance here.
// var my_random_string = chance.string();

class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit; //should not exeed
  }

  isFull = () => this.length === this.limit;
  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "sorry" : this.top.data);

  push = (color, number) => {
    this.isEmpty() ? "Empty deck" : `card number ${color} with ${number} color`;
    // if(this.isFull()){
    //     console.log(" no place left");
    //  } else{
    // const newNode = new Node(data, this.top);
    // this.top =newNode;
    // this.length++;
    //     }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("no card left");
    } else {
      const poped = this.top;
      this.top = poped.next;
      this.length--;
      return poped.data;
    }
  };
}

const colors = ["blue", "red", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const deck = new Stack(52);
const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

while (!deck.isFull()) {
  let color = random(colors);
  let number = random(numbers);
  deck.push(color, number);
}

let playerCards = 5;

let player1Cards = [];
let player2cards = [];

for (let i = 0; i < 5; i++) {
  player1Cards.push(deck.pop());
  player2cards.push(deck.pop());
}

console.log(random(colors));
console.log(random(numbers));

console.table(random(player1Cards));
console.log(random(player2cards));

console.log(deck.peek());
