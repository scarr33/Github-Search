import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Search users={users} setUsers={setUsers} />
      <UsersList users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
