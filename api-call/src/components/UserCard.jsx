import React from "react"
import "../App.css"
const UserCard = (props) => {
  return <div className="user-card">
    <img src={props.data.picture.large} alt="" />
    <h3>{props.data.name.first}</h3>
    <p>{props.data.phone}</p>
    <p>{props.data.location.city}, {props.data.location.state}, {props.data.location.country}</p>
  </div>;
};

export default UserCard