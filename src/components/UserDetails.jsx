import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  if (!userData) {
    return;
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`).then((response) => {
      response.json().then((data) => {
        setUserData(data);
      });
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10 text-xl">
      <Avatar
        alt={`${userData.login}`}
        src={`${userData.avatar_url}`}
        sx={{ width: 250, height: 250 }}
      />
      <div>Username: {userData.name ? userData.name : "Not Available"}</div>
      <div>Bio: {userData.bio ? userData.bio : "Not Available"}</div>
      <div>
        Company: {userData.company ? userData.company : "Not Available"}
      </div>
      <div>Email: {userData.email ? userData.email : "Not Available"}</div>
      <div>
        Followers :{userData.followers ? userData.followers : "Not Available"}
      </div>
      <div>
        Following :{userData.following ? userData.following : "Not Available"}
      </div>
      <div>
        Public Repos :
        {userData.public_repos ? userData.public_repos : "Not Available"}
      </div>
      <Button variant="contained" href="/" className="bg-sky-800">
        Back to Search Page
      </Button>
    </div>
  );
};

export default UserDetails;
