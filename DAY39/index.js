const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then((res) => {
    console.log("connection success");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = new mongoose.model("User", userSchema);

// const user1 = new User({
//     name:"Adam",
//     email:"amaya@gmail.com",
//     age:47,
// });
// user1.save();

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Ankush",email:"Ankush@gmail.com",age:20},
//     {name:"Yash",email:"g40@gmail.com",age:40},
// ]).then((res)=>{console.log(res)})
// .catch(err=>console.log(err));

// User.findById('669abb45052dff5ef2c21ed0').then((res) => console.log(res));

// User.findOneAndUpdate({name:"Ankush"},{age:20})
// .then(res=>console.log(res))

User.deleteOne({name:"Tony"}).then(res=>console.log(res))