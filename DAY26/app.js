// async function hello(){
//     acv//rejected due to this
//     console.log("hello")
// }//return a promise

// let h=hello()
// h.then(()=>{
//     console.log("promise was resolved");
// })
// .catch((e)=>{
//     console.log("rejected")
// })

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>5){
            console.log(num);
            resolve();
            }else{
                reject("rejected")
            }
        },1000);
    });
}
async function demo(){
    console.log("before await")
    try {
        await getNum();
    await getNum();
    getNum();
    } catch (error) {
        console.log(error)
    }
    

}
demo();