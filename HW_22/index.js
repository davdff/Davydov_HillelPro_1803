class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`${this.name}, ${this.age}`)
    }
}

class Car {
    constructor(brand, model, year, carNum) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.carNum = carNum;
        this.owner = "";
    };
    assignOwner(person) {
        if (person.age >= 18) {
            this.owner = person;
        } else {
            console.log("Людині менше 18 років.")
        }
    };
    printInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, CarNum: ${this.carNum}`);
        this.owner.getInfo()
    };
}


const person1 = new Person('Alex', 18)
const person2 = new Person('Max', 23)
const car = new Car("BMW", "X5", 2022, "KA9999CC")
const car1 = new Car("BMW", "M8", 2021, "KA6666CC")
car.assignOwner(person1)
car1.assignOwner(person2)
car.printInfo()
car1.printInfo()