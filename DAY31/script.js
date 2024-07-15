const exp=require("express");
const app=exp();

console.log(app)

let port =3000;
app.listen(port,()=>{
    console.log("app is listening on port 3000")
})

// app.use((req,res)=>{
//     console.log("requested");
//     let code="<h1>Ankush</h1>"
//     res.send(code);
// })

// sending to multiple routes
app.get("/",(req,res)=>{
    res.send("You contacted root path")
})
app.get("/apple",(req,res)=>{
    res.send("You contacted apple path");
})

// app.get("*",(req,res)=>{
//     res.send("This Path doesnot exist");
// })
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`welcome to the page of @${username}`)
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`${q}`);
})