import React from "react";
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(({avatar, name, isOnline, id}) => (
        <li className={s.item} key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};