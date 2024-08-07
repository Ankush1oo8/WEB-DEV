import { useState } from "react";
import "./lottery.css";
import { genTicket, sum } from "./helper";
export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinner = sum(ticket) === 15;
  function newTicket() {
    setTicket(genTicket(3));
  }
  return (
    <div>
      <h1>LOTTERY GAME</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <br />
      <h1>{isWinner && "Congratulations,you won!"}</h1>
      <br />
      <br />
      <button onClick={newTicket0}>GENRATE</button>
    </div>
  );
}
