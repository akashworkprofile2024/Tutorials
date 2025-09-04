========  ARRAY =================
An Array is an object type designed for storing data collections.

Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

Arrays are Objects:
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
But, JavaScript arrays are best described as arrays.

const person = {firstName:"John", lastName:"Doe", age:46};
Array Object be Like : person.firstName

Associative Arrays:
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  

The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.

JavaScript has a built-in array constructor new Array().

========  ARRAY =================

===========  DATE'S =================
Date objects are static. The "clock" is not "running".
The computer clock is ticking, date objects are not.

new Date() creates a date object with the current date and time:
You cannot omit month. If you supply only one parameter it will be treated as milliseconds. 
Math.E and Math.log() are twins.
=========== DATE'S =================

================== SWITCH ==========
Switch Control Flow
Based on a condition, switch selects one or more code blocks to be executed.
switch executes the code blocks that matches an expression.
switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.
==================SWITCH ===========

============= Errors =================
Throw, and Try...Catch...Finally
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.
=============Errors =================

============ Global Scope ============
Global Scope
Variables declared Globally (outside any block or function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block.
============ Global Scope ============

=========== Code Blocks Statements =======
Code blocks allows for multiple statements to be treated as a single unit.
=========== Code Blocks Statements =======

=========== Defining Scope ==============
Variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that specific block.
=========== Defining Scope ==============

============ String Method ================
The substr() method is removed (deprecated) in the latest JavaScript standard.
String Replace:
By default, the replace() method replaces only the first match:
By default, the replace() method is case sensitive. Writing string (with upper-case) will not work:
To replace case insensitive, use a regular expression with an /i flag (insensitive): /string/i

============ String Method =================

================  Async ===================

CallBack:A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

Asynchronous: Functions running in parallel with other functions are called asynchronous

Promises: 
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code
============== Async =======================
