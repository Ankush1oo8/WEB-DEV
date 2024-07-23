const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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

const checkToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query; //keeping it PRIVATE!!!
    if (token === "giveaccess") {
      next();
    }
    throw new ExpressError(401, "Access Denied");
  });

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/err",asyncWrap( async (req, res) => {
  abcd = abcd;
}));

//prints name of error in console
app.use((err,req,res,next)=>{
    console.log(err.name);
    next(err);
})

//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  let { status=500, message="Some Error Occurred" } = err;
  res.status(status).res.send(message);
});

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/random", (req, res) => {
  res.send("This Is a random page");
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS FORBIDDEN")
})

app.listen(8080, () => {
  console.log("listening on 8080");
});
