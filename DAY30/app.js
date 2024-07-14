const figlet=require("figlet");

figlet("h1",function(e,data){
    if(e){
        console.log("error");
        return;
    }
    console.log(data);
})