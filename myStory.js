const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });
 rl.question("Enter your age? ", function(year) 
 {

class storyNode {
    constructor(year, highLight, next = null) {
      this.year = year;
      this.next = next;
      this.highLight=highLight;
    }
  }



  class LinkedList {

    constructor(year, highLight) {
      this.head = new storyNode(year, highLight);
    }
  
    insertBeginning = (year, highLight) => {
      const newNode = new storyNode(year, highLight, this.head);
      this.head = newNode;
    };
  
    traverse = () => {
     
      let current = this.head;
      while (current) {
        console.log(`year: ${current.year}, highlight: ${current.highLight}`);
        current = current.next;
      }
    
    };


insertHighlight= (year) =>{
    let current =this.head;
    while(current.year < year){
        let currentyear = current.age +1;
        if(current.next && current.next.year === currentyear){
           current=current.next;
        }else{
            rl.question(`what was the highlight of your age ${currentyear}?`,
               function(highLight) {

            // let highLight = prompt(`what was the highlight of your age ${currentyear}?`);
            let newNode = new storyNode(currentyear, highLight,current.next);
            current.next= newNode;
            current=newNode;
               });
            
                       }
            
                    }
                }
            
                

                
 
  }
  rl.close();
     
         });

        const layla = new LinkedList(7, "i get taller");
        layla.insertBeginning(3,"i learn drawing");
        layla.insertBeginning(1,"i eat diffrent food");
        layla.traverse();

        //    layla.insertBeginning(year);
        layla.insertHighlight(r1);
        layla.traverse();


