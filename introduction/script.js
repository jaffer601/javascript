// javascript is the worlds most popular programming language.
// javascript was intially created to make web pages alive.
// javascript is a lightweight, interpreted programming language.
// javscript is dynamically typed language i.e it performs type checking at runtine.this means that scripts written dynamically typed languages can compile even if they contain errors that will prevent the script from running properly if at all.
// it is a full fledgd programming languange that enables dynamic interactivity on websites when applied to an HTML.
//javascript is not equal to java

// Benefits of learning javascript -

// Web Developer                 Jquery, Angular js, React js, Node js, Vue js ....
// Desktop App Development -     Electorn js 
// Mobile App Development        Angular js, React js, VUS js, react native, node js 


//  uses of javascript in web development -
//  Dropdown menu              Audio Player
//  Animated sliders           Video players
//  Maps                       Zoom Effects
//  Charts - graphs            Animated gallery
//  Pop - up windows           forms Validations
//  Calenders.

// Editors for javascript 
// Notepad, Notepad++, VScode, Atom, Sublime 

//  Web Browser for Javascript -
//  Google Chrome, MOzilla firefox, Internet Explorer, Safari


// What is Compiler ?:  Compiler is a software program that transforms a program or code written in high level programming language into a low level machine readable language.

// ===> compiler scans the entire program single time.

// What is Interpreter ?:  Interpreter is a software program that transforms a program or code written in high level programming language into a low level machine readable language.

// ===> Interpreter scans the statement line by line.

// What is JavaScript used for?
// JavaScript is mainly used for web-based applications and web browsers. But JavaScript is also used beyond the Web in software, servers and embedded hardware controls. Here are some basic things JavaScript is used for:

// 1.Adding interactive behavior to web pages:
// JavaScript allows users to interact with web pages. There are almost no limits to the things you can do with JavaScript on a web page – these are just a few examples:
// ==> Show or hide more information with the click of a button

// ==> Change the color of a button when the mouse hovers over it

// ==> Slide through a carousel of images on the homepage

// ==> Zooming in or zooming out on an image

// ==> Displaying a timer or count-down on a website

// ==> Playing audio and video in a web page

// ==> Displaying animations

// ==> Using a drop-down hamburger menu

// 2. Creating web and mobile apps:
// Developers can use various JavaScript frameworks for developing and building web and mobile apps. JavaScript frameworks are collections of JavaScript code libraries that provide developers with pre-written code to use for routine programming features and tasks—literally a framework to build websites or web applications around. 

// Popular JavaScript front-end frameworks include React, React Native, Angular, and Vue. Many companies use Node.js, a JavaScript runtime environment built on Google Chrome’s JavaScript V8 engine. A few famous examples include Paypal, LinkedIn, Netflix, and Uber!

// 3. Building web servers and developing server applications:
// Beyond websites and apps, developers can also use JavaScript to build simple web servers and develop the back-end infrastructure using Node.js. 

// 4. Game development:
// Of course, you can also use JavaScript to create browser games. These are a great way for beginning developers to practice their JavaScript skills. 

// JavaScript is not equal to Java.

// they are two types :
// Statically - have to define the datatype before intialization of a variable.
//  ex: c, c++, 
//  int a = 1;
//  str b = "sadiq"
// Dynamically - no need to define the datatype before intialization of a variable.
//  ex : JavaScript
//  var a =1;
//  var b = "sadiq"
// JS is a  dynamically typed language. It means no need to define the datatype before intialization of a variable.

// We can write the Js in two ways:
// 1.Internal js and 2.External js.
// JS can be linked internally by using <script> tag in HTML document 

// Two ways to implement javascript   

// 1.inpage javascript or internally (with in HTML Page)
// 2.EXternally javvascript 

// Syntax - 1. inpage or internally

// ex: <script>
//     <!--
//     JavaScript Code......!
//    -->
// </script>

// <head>
//     <title>javascript</title>
//     <script> 
//     .......
//     </script>
// </head>
// <body> 
//     <script> 
//     ......
//     </script>
// </body>
// </html>

// Externally javascript - 
// External scripts are practical when the same code is used in many different web pages.
// JavaScript files have the file extension .js.
// To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:
// <script src="myscript.js" > </script> 


// Varablies -

//In a programming language,variables are used to store data values ,
//javascript uses var keyword to declare variable. Equal signis used to assign values to variable 
// Variable name can have digits, letters, $ symbol, underscore.
// Must start with letter or $ symbol or underscore.
// right way-how to write a variable name firstname , first_name , first-name , firstName , firstname99 
//wrong way-first name(no gap) 99firstname- (Numeric value cannot start with variable name)

//var a;  declaring the variable name as "X"
//  var a=20;(assign value to variable) 

//  Example for not defned 
// var sadiq=6;
// console.log(jaffer);
// output: jaffer is not defined


// operators -
// 1.Arthimetic operator
// 2.Assignment oprator 
// 3.comparsion operator 
// 4.logical operator
// 5.Ternary or conditional operator


/*Arithmetic Operators.
operators  Description 
   +           Addition 
   -           subtaction
   *           Multipication
   /           Division
   %           Modulus (Division remainder)
   **          Exponentation
   ++          Increment 
   --          Decrement */

var a = 10;
var b = 2;
var c = a + b;
console.log("Addition:" + " " + c);
// document.write(c);
var c = a - b;
console.log("Substraction:" + " " + c);
var c = a * b;
console.log("multipication:" + " " + c);
var c = a / b;
console.log("Division:" + " " + c);
// here quotient value will be executed
var c = a % b;
console.log("modules:" + " " + c);
//here remainder value will be executed 
var c = a ** b;
console.log("Exponentation:" + " " + c);
//here a value will be multiply by 2 times a=10 and b=2 a*a 10*10=100(output)
// increment Arithmetic operator
//  pre-increment -- first we increment after we will use it.
var d = 10;
var e = ++d;
console.log("pre-increment:" + " " + e);
// console.log(e);

// post-increment -- first we will use after it will increment 
var f=2;
var g=3;
f++; 
console.log(f+g);  // print - 
// consloe.log(g++);


//example for preincrement and postincrement
//var preinc = 6;
//console.log(++preinc); output is - 7

//var poinc = 8;
// console.log(poinc++); output is - 8
// console.log(poinc); output is - 9(8+1)

//Decrement -- 
var h=10;
var i=--h;
console.log(i); // print 9

console.log(h--); // print 9
console.log(h); //8


// types of Assignment operators -

// =    +=    -=    *=    /=     %=    **= 
// Example-1 x+=y same as x=x+y   
// Example-2 x-=y same as x=x-y

var j=12;
var k=3;
j+=k;   // j=j+3 = 15
console.log(j); // print 15
j-=k;  // 15-3 =12
console.log(j);  //  print 12
j*=k;    //12*3
console.log(j); // print 36
j/=k;         // 36/3 = 12
console.log(j);  //print 12
j**=k;         // 12*12*12  (3 times bcoz k=3)
console.log(j);  // print 1728

//there are two types of data types in js 
// 1. Primitive data type & 2. Referancial data types

//Primitive data type -  
//1.String  -  sequence of characters with 'single' or "double quotes"
//2.Number  -  any integer or floating-point numeric value.
//3.boolean - tells true or false.
//4.null  -  Object.
//5.Undefined - if value is not assigned to the variable or empty variable
//6.Symbol - unique and unaltered value

/* Referancial data types - 
1.Functions
2.Arays 
3.objects  */



var l="510";
console.log(typeof l ,l); 
var m=1
console.log(typeof m, m);
var n=false;
console.log(typeof n , n);
var o = null;
console.log(typeof o, o);
var p;
console.log(typeof p,p);
//syntax to know the data-type:
//console.log(typeof variableName(to know the data-type), variableName(to know the value))

// Coercion
/*The way to convert from one data type to another(such as string to number, object to boolean, and so on) is called coercion. */

var value1 = "5";
var value2 = 9;
var sum = value1 + value2;

console.log(sum); //Output: 59

// String concatenation --  adding two string or any other operator
var q="hello"
var fn= "jaffer"
var ln= "sadiq"
console.log(q +" "+ fn +" "+ ln);

/*comparsion operator
==     loose equality (it only checks the value)
===    strict equality (it checks the both value and data type)
!=     not equal 
!==    not equal value  or not equal type 
>      greaterthan
<      lessthan
>=     greaterthan or equal to
<=     lessthan or equal to */

//loose equality 
var r=5;    // number - integer  
var r1="5"; // string
console.log(r==r1);
//it check only value....loose equality not check data type.

var r2=5;
var r3=5;
console.log(r2==r3);

var r4=6;
var r5=7;
console.log(r4==r5);

//strict equality- it check both value and data type..

var s=6;
var s1=6;
console.log(s===s1); // print true

var s2="6";
var s3=6;
console.log(s2===s3);  // print false 

var s4="6";
var s5="6";
console.log(s4===s5); // print true 

 /* Not Equal Comparison Operators */
 var t1 = 2;
 var t2= 3; 
console.log(t1 != t2);  //print - true 

/*Not Equal value or not equal type Comparison Operators */
var t4 = 2;
var  t5= '2';
console.log(t4 !== t5);  // print true 

// console.log(null==undefine);

var u=3;
var u2=4;
console.log(u>u2); //false 
console.log(u<u2); //true
console.log(u>=u2); //false
console.log(u<=u2); //true 

/* Logical Operators
1. Logical And     &&
2. Logical OR      || (this symbol will be at double quotes beside in keyboard  shit+\=|)
3. Logical Not      ! */

//&& -- both condions are true ..then output will be true 
var and1 = 5;
var and2 = 6;
console.log(and1 < and2 && and1 <= and2); // print true 
console.log(and1 < and2 && and1 == and2); // print false

var age = 18;      
if (age >= 18 && age <= 21) {
    console.log("Yes you are eligible.");
}
var ag=22;
if(ag >=18 && ag<=21)
{
   console.log("yes u are eligible");
} // here output will not print 

// logical OR operator  - ||  (if one condition is true output also true)
var or1 = 6;
var or2 = 8;
console.log(or2 > or1 || or2 == or1);

// Logical NOT operator - ! (if condition is true, then the NOT operator will make it false)

var not1 = 5;
var not2 = 6;
console.log(not1 == not2); //false without - ! operator 
console.log(not1 != not2 ); // print true  with !- operator

// Ternary Operator or conditional operator 
/* syntax -
(condition) ? runs if true : runs if false  */

var q=15;
var r;
(q>10)?r="true":r="false";
console.log(r); // true

var s=100;
var t;
(s==1000)?t="true":t="false";
console.log(t); //false

//shorthand

t=(s==500)?"True":"false";
console.log(t);   //false

t="value is "+(s==100?"True":"false");
console.log(t);


/* conditional statements

1. if statement 
2. if else statement 
3. if else if statement 
4. switch 

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be execute
*/

//if statement -- executes if condition is true .

/*if(condition){
   statement
} */
var u=100;
if(u>10)
{
   console.log("u is greater");
}




















