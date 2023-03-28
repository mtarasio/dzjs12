

class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  get diameter() {
    return 2 * this._radius;
  }
  get circlearea() {
    return (Math.PI * (this._radius * this._radius)).toFixed(2);
  }
  get circlelength() {
    return (2 * Math.PI * this._radius).toFixed(2);
  }
}

let Сircle = new Circle(15);
console.log('Радіус кола = ' + Сircle.radius); 
console.log('Діаметр кола = ' + Сircle.diameter); 
console.log('Площа кола = ' + Сircle.circlearea); 
console.log('Довжина кола = ' + Сircle.circlelength); 






class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  write(text) {
    let output = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        if (this.inkLevel > 0) {
          output += text[i];
          this.inkLevel -= 0.5;
        } else {
          break;
        }
      } else {
        output += " ";
      }
    }
    console.log(`[${this.color}] ${output}`);
  }
}

class RefillableMarker extends Marker {
  refill(amount) {
    this.inkLevel += amount;
    if (this.inkLevel > 100) {
      this.inkLevel = 100;
    }
  }
}


let marker = new RefillableMarker("blue", 50);

console.log(`Color: ${marker.color}`);
console.log(`Ink level: ${marker.inkLevel}`);

marker.write("This is a test message");
console.log(`Ink level: ${marker.inkLevel}`);

marker.refill(20);
console.log(`Ink level: ${marker.inkLevel}`);

marker.write("This message will be incomplete");
console.log(`Ink level: ${marker.inkLevel}`);





















































  
  class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  }
  
  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
  
    getHtml() {
      let html = "<table>\n";
      html += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>\n";
      for (let emp of this.employees) {
        html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td></tr>\n`;
      }
      html += "</table>";
      return html;
    }
  }

  
  const employees = [
    new Employee("Іванов Іван", "Босс", 15000),
    new Employee("Петров Петро", "Зам босса", 12500),
    new Employee("Михайлов Михайло", "Бухгалтер", 10500),
    new Employee("Олександров Олександр", "Гол бухгалтер", 12000),
    new Employee("Taras Mykolaichuk", "IT Specialist", 40000)
  ];
  

  const empTable = new EmpTable(employees);
  document.write(empTable.getHtml());
  