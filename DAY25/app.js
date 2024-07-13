function save(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4){
            resolve("success");
        }else{
            reject("failure");
        }
    });
}

let request=save("Ankush");
request.then((res) =>{
    console.log("Success2");
    console.log(res);
})
.catch(() =>{
    console.log("failure2")
})
