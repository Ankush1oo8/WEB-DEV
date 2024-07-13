//DOM events 
//events are occured which we click mouse or keyboard
const btn=document.querySelector("button");
btn.onclick=()=>{
    alert("button was clicked");
};


const btn2=document.getElementById("EL");
btn2.addEventListener("click",function (){
    this.style.backgroundColor="pink";
    alert("Using EVent Listner")
})

const btnClick1=document.getElementById("btn")
btnClick1.onmouseenter=function (){
    alert("MOuse Has Enter The CHat");
}
const ip=document.querySelector("input");
ip.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        console.log("Entered")
    }
})