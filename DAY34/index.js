const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride=require("method-override");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "ANKSUH",
    content: "I AM BEST CODER",
  },
  {
    id: uuidv4(),
    username: "ANK",
    content: "I HAVE BEST BODY",
  },
  {
    id: uuidv4(),
    username: "KUSH",
    content: "I AM BEST PROGRAMMER",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let newid = uuidv4();
  posts.push({ username, content, newid });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let {id}=req.params;
    let content =req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content=content;
    res.redirect("/posts")
  });

  app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
  })

  app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
  })

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
