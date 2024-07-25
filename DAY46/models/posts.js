const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main()
  .then(() => console.log("Connection Success"))
  .catch((err) => {
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new User({
    username: "RahulKumar",
    email: "rahul@gmail.com",
  });

  let post1 = new Post({
    content: "Hello MOTO",
    likes: 7,
  });
  post1.user = user1;

  let res=await user1.save();
  let re2=await post1.save();

  console.log(res);
  console.log(re2);
};

addData();