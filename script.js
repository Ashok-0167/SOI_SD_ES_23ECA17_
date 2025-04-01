/*
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
console.log(a == b); 
console.log(a);      
console.log(b);       

class Bike {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }

    getBrand() {
        return "I have a " + this.brand + " " + this.name;
    }
}

let newBike = new Bike("Pulsar", "Yamaha");
console.log(newBike.getBrand()); 

class Animal {
    makeNoise() {
        return "some sound";
    }
}

class Dog extends Animal {}

let newDog = new Dog();
console.log(newDog.makeNoise());  

class Bank {
    #balance = 0;

    getBalance() {
        return 'Your balance is ' + this.#balance;
    }

    deposit(amount) {
        this.#balance += amount; 
        return 'Deposited ' + this.#balance;
    }
}

let account = new Bank();
console.log(account.deposit(1000)); 
console.log(account.getBalance());  

function promptfunc(){
    let number = prompt('Enter a number');
    const num=parseInt(number);
    
    if(num){
        console.log(num+5);

    }
    else{
        alert('Please enter the number');

    }
}
const fruits=['orange','apple','mango'];
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.at(1));
console.log(fruits.join('+'));
fruits.push('kiwi');
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
fruits.unshift('grapes');

const fruits2=['pomo','guava','kiwi'];
console.log(fruits.concat(fruits2));
const modifiedfruit=fruits.map((name)=>'I Like '+name);
console.log(modifiedfruit);

const arr1=[50,60,70,80];
const result=arr1.map((num)=>num+5);
const filterednum=arr1.filter((num)=>acc+num,0);
const reducednum=arr1.reduce((acc,num)=>acc );
*/

const greet = 'hello';
let value = 'dhoni';

console.log('Hi ' + greet + ' Im ' + value);

console.log(`Hello ${greet} Im ${value}`);
//default parameters 
function greeting(name='Naveeena'){
    console.log('Hello, ${name} ');
}
greeting();

// Array Destructuring

let[y,u]=[20,30];
console.log(y,u);

//Object Destructing

let person={name:'dhoni', department:'ece'};
console.log(person.name);
let {name,age}={name: 'Mahi',department:'wk'};
console.log(name);

//spread operator (...) arrays

let numbers=[1,2,3];
let newNumbers=[...numbers,4,5];
console.log(newNumbers);
//spread operation object

let obj1={name:'Ash',department:'aero'};
let obj2={...obj1,city:'Coimbatore'};
console.log(obj2);

//rest operator
let numbers1=[1,2,3,4,5];
let [first,second,...rest]=numbers1;
console.log(first);
console.log(second);
console.log(rest);

//rest operator in function

const sum=(...numbers1)=>{
    return numbers1.reduce((acc,num)=>acc+num,0);
}
console.log(sum(50,50,40));

