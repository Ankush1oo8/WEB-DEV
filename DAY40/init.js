const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err=>console.log(err));

let allchats=[
    {
        from:"Ankush",
        to:"Raja",
        msg:"Bhag mather",
        created_at:new Date(),
    },
    {
        from:"Raja",
        to:"Ankush",
        msg:"Bhag Bhenc",
        created_at:new Date(),
    },
    {
        from:"Ankush",
        to:"Raja",
        msg:"jana lav",
        created_at:new Date(),
    },
    {
        from:"Raja",
        to:"Ankush",
        msg:"kya karra",
        created_at:new Date(),
    },
    {
        from:"Ankush",
        to:"Raja",
        msg:"teri...",
        created_at:new Date(),
    }
];

Chat.insertMany(allchats);
