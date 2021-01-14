const prompt = require("prompt-sync")({ sigint: true });

class storyNode {
  constructor(age, highlight, next = null) {
    this.age = age;
    this.highlight = highlight;
    this.next = next;
  }
}

class LinkedList {
  constructor(age, highlight) {
    this.head = new storyNode(age, highlight);
  }

  insertBeginning = (age, highlight) => {
    const newNode = new storyNode(age, highlight, this.head);
    this.head = newNode;
  };

  traverse = () => {
    let current = this.head;
    while (current) {
      console.log(`Age: ${current.age}, highlight: ${current.highlight}`);
      current = current.next;
    }
  };

  insertHighlights = (age) => {
    let current = this.head;
    while (current.age < age) {
      let currentAge = current.age + 1;
      if (current.next && current.next.age === currentAge) {
        current = current.next;
      } else {
        let highlight = prompt(`What was the highlight for age ${currentAge}?`);
        let newNode = new storyNode(currentAge, highlight, current.next);
        current.next = newNode;
        current = newNode;
      }
    }
  };
}

 
        

        const layla = new LinkedList(7, "i get taller");
        layla.insertBeginning(3,"i learn drawing");
        layla.insertBeginning(1,"i eat diffrent food");
        layla.traverse();

        const age = prompt("How old are you?");

        layla.insertHighlights(age);
        layla.traverse();


     
