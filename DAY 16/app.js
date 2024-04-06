// let pass=prompt('Write your password: ');
// //Strings are immutable
// console.log(pass.trim());

let ame='Ankush';
console.log(ame.toUpperCase());
console.log(ame.toLowerCase());


// methods with argument

let str='IloveCodding';

console.log(str.indexOf('love'));
console.log(str.indexOf('z'));
console.log(str.slice(1,5));
console.log(str.replace('love','do'));
console.log(str.replace('dd','d'));

//ARRAYS
let std=['aman','banana','ankush','anyone'];
let info=['ankush',801001,72.02];
console.log(info.pop());
info.push('chudiwal');
info.shift();
console.log(info.includes('chudiwal'));
console.log(std.reverse());

//splice methods arr.splice(start,deletecount,item0,item1....item_N)

std.sort();