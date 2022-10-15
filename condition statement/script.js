/*
Conditonal statements-
if statement 
if else statement
if else if statement
/*


//  if statement 
// let age=18;
// if(age>=18){
//     console.log("you can vote");
// }




//  if else statement
// let age=18;
// let hasvotercard="yes";
// if(age>=18 && hasvotercard== "no"){
//     document.write("yes you can vote ");
// }else {
//     document.write("you cannot vote");
// }




/* if else if -- statement 
syntax - 

 if(){

 }
else if(){

}
else if(){

}else {

}
*/



let age=18;
let hasvoteCard="no" ;

if(age>=18 && hasvoteCard =="yes"){

      document.write("you can vote")

} else if(age>=18 && hasvoteCard !="yes"){ 

       document.write("get ur voter id card");

}else{
       document.write("you can't able to vote")
}


/* nested if*/


/*  Ternary operator - - use only one statement....otherwise we can use   
syntax --
(conditon)? True statement : false statement ;  
*/
let isLoggedin = 0;
let option = isLoggedin == 1 ? "Logout" : "Login";
document.write(option); 








