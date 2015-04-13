'use strict';

class Animal {
    constructor(name) {
        this.legs = null;
        this.name = name;
        this.tails = null;
    }

    saySomething() {
        return 'Say something';
    }

    eatSomething() {
        return 'I am eating';
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.tails = 1;
    }

    saySomething() {
        return 'Bark';
    }
}

module.exports = {
    Animal: Animal,
    Dog: Dog
};
