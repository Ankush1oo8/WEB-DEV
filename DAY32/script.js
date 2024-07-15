// EJS smbedded javaScript templates
const exp=require("express");
const app=exp();
const path=require("path");

const port=8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num});
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    let data=instadata[username];
    if(data){
        res.render("igprofile.ejs",{data});
    }else{
        res.render("error.ejs")
    }
    
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})

