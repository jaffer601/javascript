/* variable - variable is used to store data 
there are three types of variables in javascript ..
1. var
2. let 
3. const (constant) - can't able to change variable..
how to write a variable name 

right way -  

firstname
first_name
first-name
firstName
fistname99

wrong way --

first name ---no gaps 
99firstname --  no numeric value at first
numeric value cant start with variable name..



 keyword    Variable Name    =     value
 var       declare           =    assign
 var        anyname           =  any data type

Example for not defined
var d = 6;
console.log(e);

output in console that " e is not defined"


 variable number should not be keyword- keyword means which is already reserved in JS
 Case is sensitive.
variable name should be unique.

*/

var a=20;  // Assigning value to variable a
var b=20;
c=a+b;
console.log(c); // print 40

var a1=20;
var  a1=30;
console.log(a1);   //print 30 

// let c1=10;
// let c1=20;
// console.log(c1); // print  Identifier 'c1' has already been declared 

let d=10;
d=20;
console.log(d);
//here we can assign value to d ..

/*const e= "hello";
const e= "hi"
e="this is sadiq"   here we can't able to decleare or assignvalue 
*/

const e1="hello this is sadiq"
console.log("e1");


// const e2;
// console.log("e2");  // print undefined 



/*Varablies -

In a programming language,variables are used to store data values ,
javascript uses he var keyword to declare variable. Equal signis used to assign values to variable 
Variable name can have digits, letters, $ symbol, underscore.
Must start with letter or $ symbol or underscore.
right way-how to write a variable name firstname , first_name , first-name , firstName , firstname99 
wrong way-first name(no gap) 99firstname- (Numeric value cannot start with variable name)
var a; var a=20;(assign value to variable) 



*/

 
// gloabl variable -  its can acess anywhere in program inside or outside..


let car= "audi"; // gobal variable

function add(){
    let result = 33; // local variable- cant able to access outside function..only can access outside function.
    console.log(result);

    console.log(car);
}
console.log(car);
add();
console.log(car);


// //Anonymous function -- without function name is called anonymous function ...how can we call anonymous function by assign variable..
// function(){
//     console.log("hello world")
// }



// function expression -assigning variable to function is call function expression ..

// let show = function(){
//     console.log("hello world");
// }

// show();

// setTimeout(functionname , time-milli seconds)

// function show(){
//     console.log("hello");
// }
 
// setTimeout(show,3000);

setTimeout(function show(){
       console.log("hello");
     },
     3000)















