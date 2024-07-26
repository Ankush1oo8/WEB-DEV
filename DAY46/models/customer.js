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

const orderSchema = new Schema({
  item: String,
  price: Number,
});



const Order = mongoose.model("Order", orderSchema);

const addOrder = async () => {
  let res = await Order.insertMany([
    { item: "Somosa", price: 20 },
    { item: "Chips", price: 10 },
    { item: "Chocolate", price: 5 },
  ]);
  console.log(res);
};

const customerSchema = new Schema({
  name: String,
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
// addOrder();

// customerSchema.pre("findOneAndDelete",async ()=>{
//   console.log("pre MiddleWare");
// })

customerSchema.post("findOneAndDelete",async (data)=>{
  if(data.order.length){
    let res=await Order.deleteMany({_id: { $in : data.order }})
    console.log(res);
  }

})



const Customer = mongoose.model("Customer", customerSchema);


const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  cust1.order.push(order1);
  cust1.order.push(order2);

  let res = await cust1.save();
  console.log(res);
};

// addCustomer();

const customerFind=async()=>{
    let res=await Customer.find({}).populate("order");
    console.log(res[0])
}
// customerFind();

const addCust=async ()=>{
  let newCust=new Customer({
    name:"Karan Arjun"
  });
  let newOrder=new Order({
    item:"Pasta",
    price:250,
  });

  newCust.order.push(newOrder);
  await newOrder.save();
  await newCust.save();
  console.log("Added new Customer");
}

// addCust();

const delCust=async ()=>{
  let data=await Customer.findByIdAndDelete('66a41b6851d72af4538b27cc');
  console.log(data);
}
delCust();