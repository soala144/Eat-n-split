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
  const friends = initialFriends;
  return (
    <div className="app">
      <div className="sidebar">
        {/* {friends.map((friend) => (
          <ul>
            <li>{friend.name}</li>
          </ul>
        ))} */}
        <FriendsList friends={friends} />
      </div>
    </div>
  );
}

export default App;
