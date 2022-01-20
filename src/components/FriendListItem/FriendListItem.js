import React from "react";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, stat }) => {
  if (!isOnline) {
    stat = "offLine";
  }
  return (
    <>
      <span className={s[stat]}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  stat: "onLine",
};