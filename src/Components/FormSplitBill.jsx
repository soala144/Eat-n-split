import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [payByUser, setPayByUser] = useState("");
  const paidByFriend = bill ? bill - payByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleBillSubmit(e) {
    e.preventDefault();
    if (!bill || !payByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -payByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleBillSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💲 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>👨‍🦰 Your Expense</label>
      <input
        type="text"
        value={payByUser}
        onChange={(e) =>
          setPayByUser(
            Number(e.target.value) > bill ? payByUser : Number(e.target.value)
          )
        }
      />

      <label>🙍‍♀️ {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💲 Who's paying for the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bills</Button>
    </form>
  );
};

export default FormSplitBill;
