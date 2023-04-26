class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAT = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 }
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SPICE = { price: 15, calories: 0 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    };

    addTopping(topping) {
        this.toppings.push(topping);
    };

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        for (let topping of this.toppings) {
            price += topping.price;
        }
        return price;
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        for (let topping of this.toppings) {
            calories += topping.calories;
        }
        return calories;
    }
}


// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories: ` + hamburger.calculateCalories());

// скільки коштує
console.log(`Price: ` + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log(`Price with sauce: ` + hamburger.calculatePrice());