class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    residents = [];
    addResident(person) {
        this.residents.push(person);
    }

}

class House {
    constructor(maxQuantityFlats) {
        this.flats = [];
        this.maxQuantityFlats = maxQuantityFlats;
    };
    addFlat(flat) {
        if (this.flats.length < this.maxQuantityFlats) {
            this.flats.push(flat);
        } else {
            console.log("Досягнуто максимальну кількість квартир в будинку")
        }
    }

}


let person1 = new Person("Nikita", "male");
let person2 = new Person("Maria", "female");
let person3 = new Person("Max", "male");
let person4 = new Person("Alex", "male");

let flat1 = new Flat();
let flat2 = new Flat();
let flat3 = new Flat();

flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);
flat3.addResident(person4);

let house = new House(2);
house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3); // Перевірка якщо додати більше квартир ніж вказано