const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main()
  .then((res) => {
    console.log("connection success");
  })
  .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
},
  author: {
    type:String,
  },
  price:{
    type:Number,
  },
});

const Book=mongoose.model("Book",bookSchema);

let book1=new Book({
    title:"RD Sharma",
    author:"Sharma",
    price:420,
});

book1.save();