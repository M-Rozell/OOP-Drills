//Object Literals, Pseudo Classes and methods

//1.
let person1 = {
    name: {
        first: "Cat",
    },
    sayHello: function () {
        console.log(`Hello! My name is ${this.name.first}.`);
    }
}

let person2 = {
    name: {
        first: "Pat",
    },
    sayHello: function () {
        console.log(`Hello! My name is ${this.name.first}.`);
    }
}

person1.sayHello();
person2.sayHello();

//2.
function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
//3.
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`)
}
//4.
let p1 = new Person('Cat', 'Nashville', 45);
let p2 = new Person('Pat', 'Huntsville', 35)
p1.sayHello();
p2.sayHello();

class Person2 {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello(){
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
    }
}

let p11 = new Person2('Cat', 'Nashville', 45);
let p22 = new Person2('Pat', 'Huntsville', 35);
p1.sayHello();
p2.sayHello();

//Inheritance
//1.2.

class Vehicle {
    constructor(type,manufacturer, numOfWheels){
        this.type = type;
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
    aboutVehicle() {
        console.log(`${this.type} is made by ${this.manufacturer} and has ${this.numOfWheels} wheels.`);
    }    
}   

let v1 = new Vehicle("Yaris", 'Toyota', 4)
v1.aboutVehicle();

//3.
class Truck extends Vehicle {
    constructor(type, manufacturer, numOfWheels, doorsNum, bed){
        super(type,manufacturer,numOfWheels)
        this.doorsNum = doorsNum;
        this.bed = bed;
    }
aboutVehicle(){
    if(this.bed === true) {
        this.bed = "it has a truck bed"
    }else{
        this.bed = "it does not have a truck bed"
    }
    console.log(`${this.type} is made by ${this.manufacturer} and has ${this.numOfWheels} wheels, ${this.doorsNum} doors, and ${this.bed}.`);
    }
}

let t1 = new Truck("Frontier", "Nissan", 4, 4, true);
t1.aboutVehicle();

//4.
class Sedan extends Vehicle {
    constructor(type, manufacturer, numOfWheels, doorsNum, size, mpg){
        super(type,manufacturer,numOfWheels);
        this.doorsNum = doorsNum;
        this.size = size;
        this.mpg = mpg
    }
    aboutVehicle(){
        if(this.size === "small"){
            this.size = "is a small size sedan"
        }else if ( this.size === "medium"){
            this.size = "is a medium size sedan"
        }
        console.log(`${this.type} is made by ${this.manufacturer} and has ${this.numOfWheels} wheels, ${this.doorsNum} doors, ${this.size}, and gets ${this.mpg}mpg.`);
    }
}

let s1 = new Sedan("Altima", "Nissan", 4, 4, "medium", 32);
s1.aboutVehicle();

//5.
class Motorcycles extends Vehicle {
    constructor(type, manufacturer, numOfWheels, doorsNum, steering){
        super(type,manufacturer,numOfWheels);
        this.doorsNum = doorsNum;
        this.steering = steering;
    }
    aboutVehicle(){
        if(this.steering === "handlebars"){
            this.steering = "has handlebars"
        }else if(this.steering === "steering wheel"){
            this.steering = "has a steering wheel"
        }
        if(this.doorsNum === 0){
            this.doorsNum = "it has no doors"
        }else if (this.doorsNum > 0){
            this.doorsNum = `it has ${this.doorsNum} doors.`

        }
        console.log(`${this.type} is made by ${this.manufacturer}, has ${this.numOfWheels} wheels, ${this.steering}, and ${this.doorsNum}.`);
    }
}

let m1 = new Motorcycles("Roadster", "Harley Davidson", 2, 0, "handlebars");
m1.aboutVehicle();
