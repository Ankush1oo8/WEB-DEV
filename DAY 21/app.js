//arrays methods

let arr=[1,2,3,4,5];

//forEach method

// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);

arr.forEach(function (el){
    console.log(el);
});

//map and filter

let double=arr.map((el)=>{
     el*el;
});

let num=[1,2,3,4,5,6,7,8,9,10];

let even=num.filter((el)=>{
   return el%2==0;
});
console.log(even);

//every method
let nums=[1,2,4,6,8];
console.log(nums.every((el)=>el%2==0));
//some method
console.log(nums.some((el)=>el%2==0));

//reduce method
//calculate sum of all the elements in arr

let sum=nums.reduce((res,el)=>{
    return res+el;
});
console.log(sum);

//spread
console.log(...nums);

//REST
function sum2(...args){//can take many arguments or parameters
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
};

//destructuring
let names=["tony","bruce","peter","steve","abs","axd"];

let [winner,second,third,...others]=names;

console.log(others);