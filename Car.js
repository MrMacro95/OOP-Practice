class Car {
    #brand;
    #speed;

    constructor(brand, speed) {
        this.#brand = brand;
        this.#speed = speed;
    }

    accelerate(amount) {
        this.#speed += amount;
    }
    brake(amount) {
        this.#speed -= amount;
    }
    getSpeed() {
        return this.#speed;
    }
}

const car1 = new Car("BMW", 110);

car1.accelerate(40);
car1.brake(100);

console.log(car1.getSpeed());
