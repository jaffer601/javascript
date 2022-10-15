//objects --


let students={
    name:"jaffer sadiq",
    age:29 ,
    college:"Sk university" , 
    // sayHello: function (){
    //     console.log("hello ")
    // } 

//es6  we can remove function 
sayHello (){
    console.log("hellOOO ")
}
};
students.sayHello();

// students["age"];
// console.log(students);
// console.log(students["age"]);
// console.log(students.name);

// students.rank="first";
// console.log(students);

// for(let key in students){ // for in loop boz we r using for in loop

//     console.log(key+ " "+students[key]);
// }



function Movie(hero, director,heroin,music){
    this.hero=hero;
    this.director = directoe ;
    this.heroin= heroin;
    this.music= music;
}

var movie1=new Movie("pk","trivikram","samantha","Dsp");
var movie2=new Movie("mahesh","trivikram","samantha","manisharma");
var movi3=new Movie("ram charan","rajamouli","kajal","keeravani");
var movie4=new Movie("chiru","indra","B.gopal","Manisharma");

console.log(Movie1);
