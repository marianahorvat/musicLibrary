// var today = new Date();
// console.log(today.__proto__);


// A constructor in JavaScript can be any function. Constructors are responsible for creating new instances.
var SmartShoe = function(size, colour, type){
  this.size = size;
  this.colour = colour;
  this.type = type;
  this.battery = 100;
}
var nikeShoe = new SmartShoe(10, 'gray', 'sport edition');
console.log(nikeShoe);

// modifying the prototype directly, e.g. by adding functions to it as properties. There is no special syntax for defining a class or modifying a class.**

var SmartShoe = function(size, colour, type) {
  this.size    = size;
  this.colour  = colour;
  this.type    = type;
  // things never arrive with full battery power ;)
  this.battery = 20;
}

// define a prototype (~instance) method
SmartShoe.prototype.recharge = function(powerIncrease) {
  this.battery += powerIncrease;
  if (this.battery > 100) {
    this.battery = 100;
  }
}

// create a new object called `nikeShoe` with the SmartShoe constructor
var nikeShoe = new SmartShoe(10, 'gray', 'sport edition');
// we call the prototype method recharge
nikeShoe.recharge(30);
console.log(nikeShoe);