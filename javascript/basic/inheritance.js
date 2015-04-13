'use strict';

function Animal(name) {
    this.legs = null;
    this.name = name;
    this.tails = null;
}

Animal.prototype.saySomething = function() {
    return 'Say something';
};

Animal.prototype.eatSomething = function() {
    return 'I am eating';
};

function Dog(name) {
    Animal.call(this, name);
    this.legs = 4;
    this.tails = 1;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constractor = Animal;

// Overwrite
Dog.prototype.saySomething = function() {
    return 'Bark';
};

module.exports = {
    Animal: Animal,
    Dog: Dog
};
