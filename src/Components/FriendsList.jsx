import React from "react";
import Friends from "./Friends";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        //   <Friend friend={friend} key={friend.id} />
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
export default FriendList;
