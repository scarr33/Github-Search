import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/base";

const Search = ({ users, setUsers }) => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const initialUsersData = await fetch(
        `https://api.github.com/search/users?q=${searchText}`
      );
      const data = await initialUsersData.json();
      setUsers(data.items);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (users.length > 0) {
      fetchUserData();
    }
  }, [users]); // Watch for changes in users state

  const fetchUserData = async () => {
    try {
      const updatedUsersData = await Promise.all(
        users.map(async (user) => {
          const response = await fetch(
            `https://api.github.com/users/${user.login}`
          );
          const data = await response.json();
          return { ...user, name: data.name }; // Merge user with updated name
        })
      );
      setUsers(updatedUsersData); // Update users state with new data
    } catch (error) {
      console.error("Error occurred while fetching user data:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-5">
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Search by username"
        onKeyUp={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        disabled={isLoading}
        className="bg-sky-800 text-white px-5 py-2 rounded-md"
      >
        {isLoading ? "Loading..." : "Search"}
      </Button>
    </div>
  );
};

export default Search;
