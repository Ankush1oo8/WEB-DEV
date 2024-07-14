const btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact= await getFacts();
    let p=document.querySelector("#facts");
    p.textContent=fact;
});

let url="https://catfact.ninja/fact";

async function getFacts(){
    try {
        let res=await axios.get(url);
        return (res.data.fact);
    } catch (error) {
        return("NO FACT FOUND");
    }
}
