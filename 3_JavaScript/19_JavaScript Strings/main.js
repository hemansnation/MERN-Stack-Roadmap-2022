// strings

let s = 'indore' + 10;

console.log(typeof s);

console.log(s);

let a = `this is a loop
it is the ${ s } best`;

// alert(a);

let abc = "alpha";

// alert(abc.length);

let goa = "goa is the best";
//         0123
// alert(goa[20]);

// charAt
// alert(goa.charAt(20));



// for (let i of "hello"){
//     alert(i);
// }

// strings are immutable

let f = "indore";

f[0] = "A";   // immutable
alert(f[0]);


// 1 + 1 = 2   immutable 


// restart

// resta$t

//  level
//  leve$


// touppercase
let t = "indorE"

// alert(t[0].toUpperCase());

// alert(t);

// alert(t.toLowerCase());

// indexOf

let st = "this is an apple this";

// alert(st.indexOf("this"));

// alert(st.indexOf("This")); // -1

// alert(st.indexOf("this", 2));

// alert(st.indexOf("i", 7));

// includes


let st1 = "this is an apple this";

// alert(st1.includes("apple"));


// startswith

// alert(st1.startsWith("apple"));


//endswith

// alert(st1.endsWith("this"));


//slice

let jan = "this is january"

alert(jan.slice(3, 8));

alert(jan.slice(0, 1));  // 't'

alert(jan.slice(3));


// codepoint


alert("A".codePointAt(0));

// fromcodepoint

alert(String.fromCodePoint(90));

// "indore"  -- > "INDORE"

// "A"  -->  65
// "a"  -->  97

// 32



// s2 = "1+2+3+4+5"

// 15

let g = "hello";

alert(g.split(""));


// wap to reverse a string word by word.

// "this is an apple"

// "apple an is this"

// -----------------

// "indore"

//  inre

// "abc" --- "abbc"


// 