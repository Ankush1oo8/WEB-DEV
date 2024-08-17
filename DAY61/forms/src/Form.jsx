import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let [username, setUserName] = useState("");


  let handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  let handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="fullName">Full Name</label>
        <br />
        <input
          placeholder="Enter URL"
          type="text"
          value={fullName}
          onChange={handleNameChange}
          id="fullName"
        />
        <br />
        <button>SUBMIT</button>
        <br /><br />
        <label htmlFor="username">USERNAME</label>
        <br />
        <input
          placeholder="Enter URL"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          id="username"
        />
      </form>
    </div>
  );
}
