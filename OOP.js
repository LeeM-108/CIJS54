class Person{
    name;
    age;
    address;
    gender;
    constructor(name, age, address, gender) {
        this.name = name
        this.age = age
        this.address = address
        this.gender = gender
        console.log(this);
    }
    speak(){
        console.log(
        `Hello, I'm ${this.name}. 
        I'm ${this.age} year old.
        My address is ${this.address}.
        I'm ${this.gender}.
        `);
    }
}
const minh = new Person('Minh', 20, 'hanoi', 'Male');
minh.speak();
const duyet = new Person('Duyet', 18, 'Hanoi', 'male' );

// Class Animal
// Species, color, numberOfLegs, gender, name
// eat --> con + name + dang an
// speak --> con + name + dang keu
// isDangerous --> so chan > 4 hoac so chan = 0, in ra co nguy hiem hay khong

class Animal{
    species;
    color;
    numberOfLegs;
    gender;
    name;
    constructor(species, color, numberOfLegs, gender, name){
        this.species = species
        this.color = color
        this.numberOfLegs = numberOfLegs
        this.gender = gender
        this.name = name
        console.log(this);
    }
    eat(){
        console.log(`Con ${this.name} dang an`);
    }
    speak(){
        console.log(`Con ${this.name} dnag keu`);
    }
    isDangerous(){
        const message = (this.numberOfLegs > 4 || this.numberOfLegs === 0 ? 'Nguy hiểm' : 'Không nguy hiểm');
        console.log(message);
    }
}

const Money = new Animal('pet', `Black`, 4, 'Male', 'Chó');
Money.isDangerous();
Money.eat();
Money.speak();


//Static method
class MyMath{
    static sum(a,b) {
        return a + b
    }
    static div(a, b) {
        return a/b
    }
}
console.log(MyMath.sum(1,2));
// Math.ceil --> làm tròn lên
// console.log(Math.ceil(1.2));

// Kế thừa

class Employee extends Person{
    salary;
    constructor(name, age, address, gender, salary) {
        super(name, age, address, gender)
        this.salary = salary
    }
    meme(){
        console.log('Make America great again!');
    }
    showOf() {
        console.log(`My salary is ${this.salary}.`);
    }
}

const myEmployee = new Employee('Trump', 20, 'White House', 'Male', '1m$');
console.log(myEmployee.showOf());






















