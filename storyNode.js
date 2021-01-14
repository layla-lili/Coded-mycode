class storyNode {
    constructor(year, highLight, link = null) {
      this.year = year;
      this.link = link;
      this.highLight=highLight;
    }
  }
  
  const node = new storyNode(2015,"i was born");
  const node2 = new storyNode(2016,"i was born", node);
  const node3 = new storyNode(2017,"i was born", node2);
  
  console.log(node.year + node.highLight);

  console.log(node3.link.data);
  console.log(node3.link.link);