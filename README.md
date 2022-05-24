# MERN-Stack-2022

## MongoDB‌ ‌|‌ ‌ExpressJS‌ ‌|‌ ‌ReactJS‌ ‌|‌ ‌NodeJS‌ ‌<br>
### Full‌ ‌Stack‌ ‌Web‌ ‌Application‌ ‌Development‌ ‌

#### Technology Stack

1. HTML
2. CSS
3. Bootstrap
4. JavaScript
5. 5‌ ‌Minor‌ ‌Projects
6. ReactJS
7. MongoDB
8. Node
9. Express
10. GIT‌ ‌-‌ ‌version‌ ‌control
11. 5‌ ‌Major‌ ‌Projects
12. Deployment


# HTML

HTML stands for Hyper Text Markup Language. It is the simplest language in the world as you do not get any errors while working with HTML.

### Day 1

Different tags - html, title, body, paragraph, heading 1 to 6, anchor, break row, link, img

Different attributes - style, href, rel, src,

<a href="https://github.com/hemansnation/MERN-Stack-Roadmap-2022/tree/main/HTML/1_HTML%20basics">Code is Here </a>

##### Interview Questions

What is HTML? 

How the HTML code compile? 

What data structure is used behind the scenes in HTML?

What is HTML parser?

How to add CSS with HTML file?


### Day 2

Tags - table, th, td, strong, b, em, span, abbr and title attribute, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"> target attribute anchor tag </a>, download attribute in anchor tag with image and text as well, specify name of the download attribute.<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel">
  rel attribute in anchor tag
</a>

What are absolute and relative URLs?

How to navigate to a specific part of the page? CSS ids

How to use the loading attribute to lazy load images? loading attribute in image tag. <a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading">Lazy Loading Details</a>

### Day 3

How to build a form? tags - submit button, checkbox, radio, date, email, file, number, password, reset, search.

Textarea, select, fieldset, legend.

How to configure a form to comunicate with
server with attributes: action, enctypes, method,
target.

How to change the design of datetype input field.

How to preview the image with file input type?<a href="https://w3collective.com/preview-selected-img-file-input-js/">Here </a>

enctypes - 
- application/x-www-form-urlencoded (the default)
- multipart/form-data
- text/plain

How Form submission attributes work.

How to perform client side form validation. <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation">using HTML</a>

How to make a button to submit a form.

How to reset a form.

<a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form">How to structure a web form.</a>


# CSS

### Day 4



Selector, Class and id , Comment, border, color, 
background-  color, image, repeat, attachment, 

Border - style , width, color, shorthand, border-radius

Margin - top, right, bottom, left

Padding - 

What is box model?


Universal selector *

Text align - left, center, justify, text-decoration - overline, none, under-line, line-through, text-transform, text-indent


### Day 5

CSS link, visited, hover, active

Table - border, width height, text-align, padding, tr:hover, tr:nth-child(even), responsive table

Navigation Bar

Website Layout

### Day 6

Mini Project

div, header, section


# JavaScript

### Day 7

JavaScript - How it works?

How to add it with HTML?

How console works? 

What is Document? 

how variables work in JS?

Operators

Algorithm based questions

 - 1, 2 , 3, 5, 8, 13, 21, 34
  - sum of even - 10
 4m
 / 2 = sum
 
 
 ### Day 8
 
 While loops, Questions, typeof
 
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"> Loose equality vs strict equality </a>
 
 
 ### Day 9
 
 For Loop, do while, arrays
 
 Events
 
 ### Day 10

 functions

 Project- Captcha Generator

### Day 11

Validations on forms


### Day 12

What are local and global variables?

How to create an object in Javascript to hold values?

How this keyword works?

Difference between var and let?


### Day 13

Function Statements, Function Expressions

Arrow functions, single line arrow function without return, without arguments, dynamically creating arrow functions

Multi line arrow function with return statement


### Day 14

Template Literals

What is Module?


### Day 15

Object Literals, Object class, Function constructor and new keyword.


### Day 16

JavaScript Project - Speech Recognition


### Day 17 

CSS transitions,  vendor prefixes for cross browser support wih WebKit.

<a href="https://caniuse.com/">Property compatibility </a>

<a href="https://cubic-bezier.com/#.17,.67,.83,.67">Create your own transition timing function</a>


### Day 18

JavaScript Array object, different types of array representations. 

Methods for stack and queue operations, push pop shift unshift.

Array with for loop, for in , for of, 

Multidimensional array

Other important methods: - splice, slice, concat, foreach, indexOf, lastIndexOf, includes, find, filter, reverse, split, join

Array.isArray

### Day 19

JavaScript String, Single and dobule quotes, backticks.

Special characters: new line character, length,

Strings are immutable

String methods: charAt,  toUpperCase, toLowerCase, indexOf, includes, startsWith, endsWidth, slice, substring, substr

Bitwise not ~


# NodeJS

### Day 20

Node JS - VM (V8 / Chakra)

<a href="https://jscomplete.com/learn/why-node-for-react" >Why Node? </a>

which node, which npm, which npx

``` javascript
// Modern JS test
(async (a = 1, ...b) => ({ ...b, a, [a]: `${a}` }))()

// New Promise APIs
util.promisify
require('fs').promises
```

What is RELP? Node.js Read-Eval-Print-Loop (REPL)

Node Hello World.

``` javascript
Common JS (module formatting system)
- require and module.exports

ES6
- import and export
```


### Day 21

NPM - Node Package Manager

<a href="https://semver.npmjs.com/">Semantic Versioning Calculator</a>

What is npm install and init?

Package.json vs package-lock.json

Creating and publishing your own npm package.


### Day 22

MERN  authantication project 
Node and express Server setup

Process object


Used packages: 

```javascript

"dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.2",
    "concurrently": "^7.0.0",
    "express": "^4.17.3",
    "is-empty": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.2.8",
    "passport": "^0.5.2",
    "passport-jwt": "^4.0.0",
    "validator": "^13.7.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
```




### Day 23

MERN authentication Project
Models and Validation

Register and Login Validations

User schema model

routes for register user


### Day 24 

MERN authentication Project

API for register


### Day 25

MERN Authentication Project

API for Login, Passport JWT strategy

Postman api testing

### Day 26 

MERN Authentication Project

React App


### Day 27

MERN Authentication Project

React App Navbar component

### Day 28 

MERN Authentication Project

React App Landing page

Login Page

### Day 29

MERN Authentication Project

React App Landing page

Register and Login 

# ReactJS

### Day 30

React Basics

Why React? 

CDN - unpkg - React, ReacrDOM and babel

Understanding JSX (JavaScript XML)
- JSX Elements
- Comment
- Rendering JSX
- Style and className in JSX
- Injecting data into JSX

#### Interview Questions
- What is babel?
- What is transpiler?
- What is single page application?
- What is DOM?
- What is Virtual DOM?


### Day 31 

React and Node Setup, create react app

Install these extensions from Visual Studio Code

- Prettier
- ESLint
- Bracket Pair Colorizer
- ES7 React/Redux/GraphQL/React-Native snippets

create-react-app
- adding first JSX code with react


#### Interview Questions
- What is module?
- What is package?
- What is NPM?
- What is webpack?


### Day 32

React and JSX with create-react-app


Create React app
- add jsx and render the content
- Inject Data into JSX
- Add image in the page



### Day 33

React Components

JavaScript Function and JavaScript Class

- Functional Component / Presentational Component / Stateless Component / Dumb Component
- Class Component / Container Component/ Statefull Component / Smart Component

Rendering React Components

#### Interview Questions
- What is React Component?
- Difference between normal function and arrow function.
- How to make reusable react components?
- How small is a React component?
- What is the difference between a pure JavaScript function and a functional component?


### Day 34 

React Components with Variables

Creating Hexadecimal color with react

Map function for generating li tag using JSX


### Day 35

React Props

Props in functional Components

String Props

### Interview Questions

- What is props in a React component ?
- How do you access props in a React component ?
- What data types can we pass as props to components ?

### Day 36

React Props

Props objects
- Different types of props object
- String, number, boolean, array, object, function, props


### Day 37

React Map List Keys

Working of Map function with Numbers, arrays of arrays, arrays of object.

Key mapping, 

#### Interview Questions

- Why you need to map an array ?
- Why we need keys during mapping an array ?


### Day 38 

React Class Components
Statefull components

Class Components, props in class components, methods in class components.

Convert all the functional components into class components.

#### Interview Questions

- What is inheritance and how do you make a child from a parent class?
- What is class based React component ?
- What is the difference between functional React component and class based React component ?
- When do we need to use class based components instead of functional components


### Day 39

React class componenets

Methods in class components

#### Interview Questions

- What is the use cases of class based component ?
- Which type of component do use most frequently ? functional or class-based component

### Day 40

React State

#### Interview Questions

- What is state in React ?
- What is the difference between props and state in React ?
- How do you access state in a React component ?
- How do you set a set in a React component ?

### Day 41

React Folder Structuring, import and export

#### Interview Questions

- What is the importance of React Folder Structure and File Naming
- How do you export file
- How do you import file
- Make a component of module and export it as named or default export
- Make a component or module and import it

### Day 42

React Events

- What is an event?
- What is the different between an HTML element event and React event?
- Write at least 4 keyboard events?
- Write at least 8 mouse events?
