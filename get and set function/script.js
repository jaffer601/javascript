var person={
    name:"jaffer sadiq",
    age:29,

    // getname:function(){
    //     return this.name.toUpperCase();
    // }

    // get getname(){
    //     return this.name.toUpperCase();
    // }
    set setname(n){
    this.name =n.toUpperCase();
    }

};
person.setname="sadiq";
// person.name ='basha'   // this line is for get
// console.log(person.getname);
console.log(person);

