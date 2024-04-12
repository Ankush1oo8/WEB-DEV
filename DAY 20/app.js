const student={
    name:"Ankush",
    rollno:28,
    eng:98,
    math:99,
    sci:69,
    getAvg() {
        let avg=(this.eng+this.math+this.sci)/3;
        console.log(avg);
    }
}
//this keyword is used for using keys in function oof object

//arrow function

const sum=(a,b)=>{
    console.log(a+b);
};

//implicit Return 
const mut=(a,b)=>(a*b);

//set timeout

console.log("hi there!");

setTimeout(()=>{
    console.log("Ankush");
},5000);

console.log("Welcome to");

let id=setInterval(()=>{
    console.log("Ankush");
},2000);

clearInterval(id);