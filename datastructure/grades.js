const students = [
  {
    name: "Jean-Luc Garza",
    score: 24,
  },
  {
    name: "Teddy Munoz",
    score: 79,
  },
  {
    name: "Georgia Ali",
    score: 17,
  },
  {
    name: "Vicky Calhoun",
    score: 8,
  },
  {
    name: "Awais Weaver",
    score: 65,
  },
  {
    name: "Athena Kline",
    score: 52,
  },
  {
    name: "Zacharia Whitaker",
    score: 38,
  },
  {
    name: "Clarice Davenport",
    score: 99,
  },
  {
    name: "Viktoria Flynn",
    score: 84,
  },
  {
    name: "Ianis Crossley",
    score: 20,
  },
  {
    name: "Johnnie Owens",
    score: 74,
  },
  {
    name: "Emily-Rose Erickson",
    score: 33,
  },
  {
    name: "Adeel Nieves",
    score: 100,
  },
  {
    name: "Dustin Villegas",
    score: 98,
  },
  {
    name: "Maxine Hughes",
    score: 65,
  },
  {
    name: "Bilaal Harding",
    score: 79,
  },
  {
    name: "Maddie Ventura",
    score: 71,
  },
  {
    name: "Leroy Rees",
    score: 44,
  },
  {
    name: "Wanda Frank",
    score: 73,
  },
  {
    name: "Margaux Herbert",
    score: 80,
  },
  {
    name: "Ali Rios",
    score: 70,
  },
  {
    name: "Nigel Santiago",
    score: 25,
  },
  {
    name: "Markus Greene",
    score: 78,
  },
  {
    name: "Harlan Parrish",
    score: 97,
  },
  {
    name: "Baran Davidson",
    score: 43,
  },
  {
    name: "Seth Rodriguezh",
    score: 67,
  },
  {
    name: "Diego Mayer",
    score: 100,
  },
];

const prompt = require("prompt-sync")({ sigint: true });

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }

  set(object) {
    this.key = Object.keys(object)[this.hashElement];

    let value = object[this.key];
    let index = this.hashkey(value);
    if (this.data[index] == null) {
      this.data[index] = object;
    } else if (this.data[index].length == undefined) {
      let pastData = this.data[index];
      this.data[index] = [pastData];
      this.data[index].push(object);
    } else {
      this.data[index].push(object);
    }
  }

  get(data) {
    let index = this.getIndex(data);
    if (this.data[index].length == undefined) {
      return this.data[index];
    } else {
      let arr = this.data[index];
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let value = element[this.key];
        if (data.localeCompare(value) == 0) {
          return element;
        }
      }
    }
  }

  hashkey(grade) {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  getIndex(key) {
    let index = key % this.classSize;
    return index;
  }

  //     let indexNum = 0;
  //     for (let i = 0; i < element.length; i++) {
  //       indexNum += element.charCodeAt(i);
  //     }
  //     return indexNum % this.data.length;
  //   }
}

const maxStudent = prompt("Choose maximum number of students ?");
let table = new HashTable(maxStudent);

for (let n = 0; n < maxStudent; n++) {
  console.log(table.getIndex(students[n].score));
}

// let a = {
//   Name: "layla",
//   Age: 26,
// };
// table.set(a);

// console.log(table.get("A"));
