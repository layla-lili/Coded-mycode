const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addchild = (node) => {
    this.children.push(node);
    let m = this.children[0].slice();

    console.log(`added ${this.name} to  ${m}`);
  };
  remChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.data);
      nodes = [...nodes, ...current.children];
    }
  };
}

const familyroot = new TreeNode("hamza");

const family1 = prompt("enter child full name (done if finished):");
const child1 = new TreeNode(family1);

familyroot.addchild(child1);
familyroot.traverse(child1);
