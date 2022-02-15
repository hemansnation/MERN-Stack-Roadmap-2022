var g = "Hello wOrld";
var g = "Hi";

console.log(g);


var x = "String"; // global variable

function indore(){
    var y = "Bye";  // local variable
    console.log(y);
    console.log(x);
}

indore();

// console.log(y);

// var 

// var x = "String"; // global variable

function indore1(){
    var y = "Bye";  // local variable
    console.log(y);
    x = "Not String";
    console.log(x);
}

indore1();
console.log(x);





var a = "hi this is jhon";
var time = 5;

if (time > 4){
    var a = "hello";
}

console.log(a);


// let t = 10;
// let t = 20;

// console.log(t);


// let is blocked scope
// cannot be redeclared
// 


let r = 10;
let s = 20;

{
    let r = 50;
    console.log(r);
}

r = 40;
console.log(r);


let hello;

console.log(hello);

var hi;

console.log(hi);


// objects

let anurag = {
    name:"Anurag",
    age: 21,
    college: 'Medicaps'
}

console.log(anurag);
console.log(anurag.age);
console.log(anurag['age']);



// let abhi = {
//     name:"Aabhansh",
//     age: 21,
//     college: 'Medicaps',
//     username: function(){
//         return abhi.name + abhi.age;
//     }
// }

// console.log(abhi);
// console.log(abhi.username);
// console.log(abhi.username());

let abhi = {
    name:"Aabhansh",
    age: 21,
    college: 'Medicaps',
    username: function(){
        return this.name + this.age;
    },
    isAdult: function() { if(this.age > 18){ return true}else{ return false}}
}
console.log(abhi);
console.log(abhi.username);
console.log(abhi.username());
console.log(abhi.isAdult());

let p1 = {
    name: "hello",
    age: 21
}

let p2 = {
    name: "hello",
    age: 21
}

console.log(typeof p1);

console.log(p1 == p2);


console.log(p1 === p2);