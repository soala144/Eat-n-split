import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [openForm, setOpenForm] = useState(false);
  const friends = initialFriends;

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {openForm && <FormAddFriend />}
        <Button onClick={() => setOpenForm(!openForm)}>
          {openForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
