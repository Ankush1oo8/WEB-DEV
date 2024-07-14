const exp=require("express");
const app=exp();

console.log(app)

let port =3000;
app.listen(port,()=>{
    console.log("app is listening on port 3000")
})

app.use((req,res)=>{
    console.log("requested");
    let code="<h1>Ankush</h1>"
    res.send(code);
})