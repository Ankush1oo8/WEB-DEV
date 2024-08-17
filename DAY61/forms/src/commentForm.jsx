import { useState } from "react";
export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
  }


  return (
    <div>
      <h4>GIVE A COMMENT</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={formData.username} />
        <br />
        <br />
        <br />
        <textarea value={formData.remarks}>REMARKS</textarea>
        <br />
        <br />
        <br />
        <input
          type="number"
          value={formData.rating}
          placeholder="rating"
          min={1}
          max={5}
        />
        <br />
        <br />
        <br />
        <button onClick={}>ADD</button>
      </form>
    </div>
  );
}
