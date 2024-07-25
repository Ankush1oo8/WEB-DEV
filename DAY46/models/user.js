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
  address: [
    {
        _id:false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "sherlockHolmes",
    address: [
      {
        location: "211B baker Street",
        city: "London",
      },
    ],
  });
  user1.address.push({
    location: "P32 WallStreet",
    city: "London",
  });
  let res=await user1
    .save()

    console.log(res);
};

addUsers();