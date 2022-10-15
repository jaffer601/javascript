/*
let & const
rest operator 
spread operator
scope of variables and functions
template string or template literal 
Arrow function
Destructuring arrays and objects , nested array and objects
object literals
method
call back function
default parameters
itterate string or array
*/

//let -- we can't able to re-decleare but we can assign value
let a=20;
// let x=10; we cant able to re-declare
a=10;  //but we can assign
console.log(a);

//const - cant able to re-assign or can't able to declare 
//const means fixed ..cant able to change
const b="sadiq";
//const b= "jaffer"; //we cant able to re-declare
// b="patan"; we cant able to assign 
console.log(b);

//rest operator  it defines 3 dots (...)
//used to give multiple arguments with single parameters
function sum(c,d){
    console.log(c+d);
}
sum(10,20); //here we can pass only two arguments,bcoz we given only two(c,d)parameters...if we want to pass more arguments we have to use REST parameters or REST operator

const randomfunction=(name,friend, ...rest)=>console.log(name,friend,rest)
randomfunction("sadiq","jaffer","20","30","40");
//print in array


//spread operator (...) -using spread operator, we cn copy elements of an arry into a new array or properties of an object into a new object

let ar1=[1,2,"jaffer"];
let ar2=["sadiq",3,4];
let ar3=[...ar1, ...ar2 ,5,6,7];
console.log(ar3);

let obj={
    myname:"jaffer", 
    age:29,
    Qualification:"MBA"
}
let obj1={
    ...obj,
    Mobile:944108276,
    email:"jaffersadiq601@gmail.com"
}
console.log(obj1);


// Template string or template literals -  back tick ` ` (black tick key will be find top of tap key  or below esc key) its just work like string concatnation..

var user="jaffer";
var user2="sadiq";
console.log(`hello my name is ${user} ${user2} !how are you all guys`);

// template string with functions

let fn="jaffer";
let ln="sadiq";
function functionname(fn,ln){
    return `  $ {fn} ${ln} `;
}
let hello=`hello  ${fn} ${ln} `;
functionname();
console.log(hello);

let str=`hello
         sadiq
`
console.log(str); 
 /* print
 hello
 sadiq
*/


//Arrow function 
function functionname(x,y){
    var ad=x+y;
    return ad;
}
console.log(functionname(2,3));

s=(x1,y1)=>{
    var ad1=x1+y1;
    return ad1;
}
console.log(s(2,3));

//destructuring arays and objects
//old method
let book=["adv js",200,150];
let name=book[0];
let pages=book[1];
let price=book[2];
console.log(name);
console.log(pages);
console.log(price);

//new method
let[na,fe,pr]=book;
console.log(na,pr,fe);

// let jsbook=["adv js", 200 ,300 [2015,"Access-group"]];
// let[jbook,jsprice,jspages,[jsyear,jsp]]=jsbook;
// console.log(jbook);

//destructuring objects
//old method
const jsbook2=
{
   course:"javascript", 
   institue:"access", 
   loc:"bangalore"
}
// let b5=jsbook.course;
// let bi=jsbook.institue;
// let blo=jsbook.location;
// console.log(b5,bi,blo);

//new method
const {course,institue,loc}=jsbook2;
console.log(course,institue,loc);


//itterate string or array
//syntax for(let x of arrayname){}
let score=[10,20,30,40,50];
for(let x of score){
    console.log(x);
}



//default parameters
function talk(msg){
    console.log(msg);
}
talk();

function talk(msg="hello"){
    console.log(msg);
}
talk();


function add(i=10,u=20){
    console.log(i+u);
}
add(20,40);


//object literals -- if key & value both are same then we can write code like this
let name5="jaffer";
let education="MBA";
var object1={
    name5,
    education
};
console.log(object1);

//use variables as a property name
let n="student";
var object8={
    [n+"sname"]:"jaffer sadiq" ,
    edu:"mba"
};
console.log(object8);



