import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const UsersList = ({ users, setUsers }) => {
  if (!users) {
    return <div>Users data not loaded yet</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 my-5 ">
        {users.map((user) => (
          <Link
            key={user.id}
            to={user.login}
            className="flex flex-col justify-center items-center border-solid border-2 border-black rounded-lg p-5 cursor-pointer"
          >
            <Avatar
              alt={`${user.login}`}
              src={`${user.avatar_url}`}
              sx={{ width: 100, height: 100 }}
            />
            <div>Name: {user.name ? user.name : "Not Available"}</div>
            <div>Username: {user.login ? user.login : "Not Available"}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UsersList;
