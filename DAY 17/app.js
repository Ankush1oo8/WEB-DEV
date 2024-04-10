//for loops
for(let i;i<=5;i++){
    console.log(i);
}
// prints 1 2 3 4 5

//while loop
let j=1;
while(j<5){
    console.log(j);
    j++;
}
//PRINT ODD NUMBERS
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(`${i} is odd`);
    }
}
//print even nnumbers 
for(let i=1;i<=15;i++){
    if(i%2==0){
        console.log(`${i} is even`);
    }
}

//infinite loops
// for(let i=1;i>=0;i++){

// }
// for(let i=0; ;i++){

// }

//fav movie
let fav='avatar';
let guess=prompt('Guess the movie:')
while(guess!=fav && guess!=fav){
    console.log("wrong")
    guess=prompt('try again')
}
if(guess==fav){
    console.log('congrats!!!')
}
//for of
for(char of "ankush"){
    console.log(char);
}