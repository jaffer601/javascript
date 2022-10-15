// Arithmetic Operators.
//operators  Description 
//    +           Addition 
//    -           subtaction
//    *           Multipication
//    /           Division
//    %           Modulus (Division remainder)
//    **          Exponentation
//    ++          Increment 
//    --          Decrement 

var a=10;
var b=2;
var c=a+b;
console.log("Addition:"+" "+c);
// document.write(c);
var c=a-b;
console.log("Substraction:"+" "+c);
var c=a*b;
console.log("multipication:"+" "+c);
var c=a/b;
console.log("Division:"+" "+c);
// here quotient value will be executed
var c=a%b;
console.log("modules:"+" "+c);
//here remainder value will be executed 
var c=a**b;
console.log("Exponentation:"+" "+c);
//here a value will be multiply by 2 times a=10 and b=2 a*a 10*10=100(output)

// post-increment and pre-increment
var d=10;
var e=20;
var f=d++;
console.log("pre-increment:"+" "+f);
console.log(d+e);

var g=10;
var g1=30;
g--;
console.log(g+g1);  // print 39
/* g=10 
   g-1
   10-1
   9+30 = 39
*/

/* Data types -- 1. Primitive data type and referancial data type
   
  Primitive data type -- 

  1. string
  2. number 
  3. boolean 
  4. null 
  5.undefined 
  6. symbool()
  
  Referancial data types -

  Functions 
  Arrays
  objects

*/

/* Assignment Operators
 =            X=Y    
 +=           X=X+Y          OR  X+=Y
 -=           X=X-Y 
 /=           X=X/Y
 *=           X=X*Y
 %=           X=X%Y
 **           X=X**Y
*/


/* Comparsion operators

   operators                            Description

   ==                               loose equality or equal to [it's checks only value not datatype]
    5==5   (true)
    6==5   (false)
    5=='5' (true)

   ===                             strict equality [it checks both value and datatype]

    5===5   (true)
    6===5   (false)
    5==='5' (false)

    !=                              not equal

    8 !=5 true
    5 !=5 true
    

    !==                            not equal value or not equal type

    5!==5  false
    5!=="5"  true  (here data type not maching)
    5 !==8   true

    >                             greaterthan
    <                             lessthan 
    >=                            greaterthan or equal to
    <=                            lss than or equal to

*/


// Logical Ooperators 

/*  
     operator    name
     &&         Logical and (run only when both condition must true)
     ||         Logical or  (one condtion must be true)
     |          Logical Not  (Reverse answer ,if ture output will be false)
*/

/*syntax 
if(condtion1 && condition2){

}
*/

var age=18;
if(age>=18 && age<=21 ){
    console.log("yes you are eligible");      //run if both conditions are true
}



var age=22;
if(age>=18 || age<=21 ){
    console.log("yes you are eligible");      //run if one conditions are true
}

