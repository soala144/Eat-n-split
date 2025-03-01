import React, { useState } from "react";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [payByUser, setPayByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💲 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>👨‍🦰 Your Expense</label>
      <input
        type="text"
        value={payByUser}
        onChange={(e) => setPayByUser(e.target.value)}
      />

      <label>🙍‍♀️ {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>💲 Who's paying for the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
