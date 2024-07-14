let url="https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//     res.json().then((data)=>{
//         console.log(data.fact);
//     })
// })
// .catch(e=>{
//     console.log(e);
// })

async function getFact(){
    try {
        let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
    } catch (error) {
        console.error(error)
    }
    
}