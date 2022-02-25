// object literals

let person1 = {
    firstName: 'Yash',
    lastName: 'Jain',
    age: 21
}

let person2 = {
    firstName: 'Punit',
    lastName: 'Garg',
    age: 18
}


console.log(person1);
console.log(person1 == person2);
console.log(person1 === person2);


// object class
console.log(Object.is(person1,person2));



// function constructor
function Person(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = 18;
}

// new keyword

let p1 = new Person('Punit', 'Garg');
let p2 = new Person('Shashi', 'Kumar');

console.log(p1);
console.log(p2);


console.log(Object.getPrototypeOf(p1));




// properties 

// prototype 