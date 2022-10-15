//if we are accessing object in same function we can use this keyword ...we can access normal way also ..but we can use this key word ..shortcut way


let person = {
  fn: "sadiq",
  ln: "jaffer",
  sayHello () {
   console.log("hello ! this is " + person.fn+" and i hava a car" + car.brand + "car");
   console.log("hello ! this is " + this.ln+" and i hava a car" + car.brand + "car");
  }
};
let car = {
  brand: "skoda",
  colour: "black",
};
person.sayHello();



// map() function  synatx
// var a=[1,2,3,4,5];
// a.map(function(){
//     statement
// });


var ary=[1,2,3,4,5];
var b=ary.map(test); // first test will get 1 index value (1)next 2 index value (2) .........untill 5
document.write(b);
function test(x){
    return x*2;
}


var aryofobjects=[
{fname:"sadiq",lname:"jaffer"},
{fname:"basha",lname:"js"},
{fname:"html",lname:"css"},
];

var c=aryofobjects.map(key);
document.write(c);

function key(y){
    return y.fname + " "+ y.lname ;
}