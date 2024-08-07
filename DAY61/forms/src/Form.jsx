import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let handleNameChange = (e) => {
    console.log(e.target.value);
    setFullName(e.target.value);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Enter URL"
          type="text"
          value={fullName}
          onChange={handleNameChange}
          id="fullName"
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
