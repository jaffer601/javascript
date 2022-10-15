function add(){

if(arguments.length==0){
    console.log("no arguments passed !");
}else{
    let sum =0;
    for(let i=0;i< arguments.length; i++){
        sum=sum + arguments[i];
    }
    console.log(sum);
  } 
}
// let addition = add; 

add(5,7,10);