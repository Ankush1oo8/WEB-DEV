const btn=document.querySelector("button")
const ul=document.querySelector("ul")
const inp=document.querySelector("input")

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let del=document.createElement("button");
    del.innerText="REMOVE";
    del.classList.add("delete")
    item.appendChild(del);
    ul.appendChild(item);
    inp.value="";
})

// let del=document.querySelectorAll(".delete");
// for(d of del){
//     d.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }
// not working on new button

//get help of parent element
ul.addEventListener("click",function(e){
    console.log(e)
    if(e.target.nodeName=="BUTTON"){
        // console.log(e.target)
        let par=e.target.parentElement;
        par.remove();
    }
})