const express=require("express");
const app=express();

//middle ware are always at the start of the code
// app.use((req,res,next)=>{
//     console.log("I AM A MIDDLEWARE");
//     next();
// })

//logger
// app.use("/",(req,res,next)=>{
//     console.log("req.method");
//     next();
// })

const checkToken= ("/api",(req,res,next)=>{
    let {token}=req.query;     //keeping it PRIVATE!!!
    if(token==="giveaccess"){
        next();
    }
    res.send("Access Denied!!")
})

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});



app.get("/",(req,res)=>{
    res.send("welcome")
});
app.get("/random",(req,res)=>{
    res.send("This Is a random page");
})

app.listen(8080,()=>{
    console.log("listening on 8080");
})