//functions

// function funcName(){
//     something
// }

function hello(){
    console.log("hello")
}
hello();//call a functions

function printName(){
    console.log("Ankush")
}
hello();
printName();

//function to print random number

function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rollDice();

//Using Parameter with function
function PrintNameAndAge(name,age){
    console.log(`Welcome ${name}, Your age is: ${age}`)
}
PrintNameAndAge('Ankush',18);


//calc average of 3 number

function calAvg(a,b,c){
    let avg=Math.ceil((a+b+c)/3);
    console.log(`Average of this three numbers are: ${avg}`);
}

calAvg(18,16,99);

//return keyword
let sum1=57;//global scope
function sum(a,b){
    let sum1=a+b;//can't be used ouotside of sum function
    return sum;//variable sum has block scope 
}
console.log(sum(1,2));

//higher order function

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,999);