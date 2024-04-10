//object Literals
//used to store keyed collection & complex entities
//property=>(key,value)pair

let delhi ={
    latitude: "28.7041 N",
    logitude: "77.1025 E"
};

const student={
    name: "Ankush",
    age: 23,
    marks: 94.32,
    city: "Delhi"
};


//crerating Thread? twitter post

const post={
    username:"@ankushchudiwal",
    content:"This is my FirstPost",
    likes:6969,
    comments:69,
    reposts:5,
    tags:["@ankush","Gaming"]
};

//get values
console.log(student.name);
console.log(post.likes);
console.log(delhi);
console.log(post.username);

//coversion in Get Values

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
//js automatically turns this keys in strings 

//add update values
student.city="Mumbai";
console.log(student.city);
delete student.city;
console.log(student.city);//undefined

//Nested Objects
const info={
    anam:{
        grade:"A+",
        city:"delhi"
    },
    ankush:{
        grade:"S+",
        city:"Solapur"
    },
    null:{
        grade:"SS++",
        city:"Heaven"
    }
};
console.log(info.null);

//Math Objects
console.log(Math.random());//generate number from 0 to 1

//Random Integer from 1 to 10
let num=Math.random();
num=num*10;//to generate from 0 to 9
num=Math.floor(num); //to round off to lowest integer
num=num+1; // to go from 1 to 10;
console.log(num);

//all four steps in one line
console.log(Math.floor(Math.random()*10)+1);
