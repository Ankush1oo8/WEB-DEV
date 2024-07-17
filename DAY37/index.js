const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const path=require("path");
const methodOverride=require("method-override");
const app=express();

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"webdev",
    password:"ankush",
});

let getRandomData=()=>{
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};



//HOME
app.get("/",(req,res)=>{
    let q="SELECT count(*) FROM user";
try{
    connection.query(q,(err, result)=>{
    if(err) throw err;
    console.log(result);
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
});
}catch(err){
    console.log(err);
}
});

//SHOW USERS
app.get("/user",(req,res) => {
    let q="SELECT * FROM user";
    try{
        connection.query(q,(err, users)=>{
        if(err) throw err;
        res.render("user.ejs",{users});
    });
    }catch(err){
        console.log(err);
    }
})

//EDIT 
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err, result)=>{
        if(err) throw err;
        let user=result[0];
        res.render("edit.ejs",{user});
    });
    }catch(err){
        console.log(err);
    }
    
})

//UPDATE
app.patch("/user/:id",async (req,res)=>{

    let {id}=req.params;
    let{password:formpass, username:newuser}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err, result)=>{
        if(err) throw err;
        let user=result[0];
        if(formpass!=user.password){
            res.send("Wrong PASSword");
        }else{
            let q2=`UPDATE user SET username='${newuser}' WHERE id='${id}'`
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/user");
            })
        }
        
    });
    }catch(err){
        console.log(err);
    }
})

app.listen(8080,()=>{
    console.log("listening on 8080");
})


// try{
// connection.query(q, [data],(err, res)=>{
//     if(err) throw err;
//     console.log(res);
// });
// }catch(err){
//     console.log(err);
// }

// connection.end();
