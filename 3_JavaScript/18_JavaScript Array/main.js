// array

let a = [1,2,3,"A"];

// let arr = new Array(1,2,3,4);

console.log(a);

// alert(a);
//  2011   2015

// TV   - class
// - usb
// - bluetooth
// - hdmi

// live TV  - object

// remote  - reference


console.log(a[0]);

console.log(a[-1]); // undefined

// length

console.log(a.length);

a[2] = 100;

console.log(a[2]);

a[9] = 500;

// alert(a[6]);

let x = a;

x[0] = 900;

// alert(a);

let arr = [
    "orange", 
    true, 
    {name: "dev"}, 
    function(){ alert("Hello"); },
];

console.log(arr[2].name);

// arr[3]();

// stack - LIFO

let f = ['orange', 'apple', 'banana'];

f.push("car");

// alert(f);

f.pop();
// alert(f);

console.log(f.pop());

// alert(f);

// queue - FIFO

//shift
let fab = ['orange', 'apple', 'banana'];

fab.shift();
// alert(fab);
console.log(fab[0]);

console.log(fab.length);

// unshift

fab.unshift("holi");
// alert(fab);

// for loop

let may = ['orange', 'apple', 'banana', "june"];

// for(let i = 0 ; i< may.length ; i++ ){
//     alert(may[i]);
// }


for (let y in may){
    console.log(y);
}

for(let r of may){
    console.log(r);
}

let m = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log(m[1][2]);


// methods

// splice

let july = ['orange', 'apple', 'banana', "june"];

// july.splice(1,2);

// alert(july);

// july.splice(0, 2, "lets", "goa");

july.splice(2,0, "lets", "indore");

alert(july);


// slice
//                              -2        -1
let aug = ['orange', 'apple', 'banana', "june"];

// alert(aug.slice(1,3));

// alert(aug.slice(2));

// alert(aug.slice(-2));


// concat

let s = [1,2];
let e = [4,5];
// alert(s.concat(e));


// foreach

let sep = ['orange', 'apple', 'banana', "june"];

// sep.forEach(alert);

// sep.forEach((item, index, array) => {
//     alert(`${item} this items index is ${index} of array ${array}`)
// });


// indexOf


let oct = ['orange', 'apple', 'banana', "june"];

// alert(oct.indexOf('apple'));

// alert(oct.indexOf(5));

// // includes

// alert(oct.includes('orange'));


// find

let yes = [
    {id:1, name:"ravi"},
    {id:2, name:"toshi"},
    {id:3, name:"raj"},
    {id:4, name:"dev"},
];

let user = yes.find(i => i.id == 2);

console.log(user);

console.log(user.name);


let no = yes.filter(j => j.id > 1);
console.log(no.length);
console.log(no);

alert(Array.isArray(yes));