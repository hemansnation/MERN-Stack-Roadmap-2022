// function statements
// alpha();

// function alpha(){
//     let y = 10;
//     console.log(y);
//     return y + 5;
// }

// a = alpha();
// console.log(a);

// function expression
// beta();

let beta = function(){
    let y = 10;
    console.log(y);
    return y + 5;
}

x = beta();
console.log(x);
console.log(beta);
console.log(typeof beta);

// function expression with arguments
let beta1 = function(a,b){
    let y = a + b;
    console.log(y);
    return y + 5;
}

x = beta1(10,20);
console.log(x);



// single line arrow function

let dog = (x,y) => x + y;

console.log(dog(4,5));

// without argument

let dog1 = () => console.log("Hello from single line arrow function");

dog1();

// let dog2 = () => a + b;

// console.log(dog2(4,5));

let square = n => n * n;

console.log(square(4));


let age = prompt("Enter your age");

let welcome = (age > 18) ? () => alert("Hello") : () => alert("Bye")   ;

welcome();
console.log(typeof welcome);

// multi line arrow function

let yellow = () => {
    let r = 10;
    console.log(r);
    return r * 2
};

console.log(yellow());