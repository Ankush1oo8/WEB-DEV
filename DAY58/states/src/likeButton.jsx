import { useState } from "react";

export default function LikeButton(){
    let [isLiked,setLiked]=useState(false);
    let toggleLike=()=>{
        setLiked(!isLiked)
    };
    let likestyle={color:"red"}
    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i style={likestyle} className="fa-solid fa-heart"></i>
                ):(
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    )
}