const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("backend",path.join(__dirname,"/backend"))


app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    res.send(`Welcome ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,pass}=req.body;
    res.send(`Welcome ${user}`);
});





app.listen(port,()=>{
    console.log("port on 8080");
});