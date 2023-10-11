import { useState } from "react";
import CreateUser from "./components/createUser/CreateUser";
import UserList from "./components/UserList/UserList";
import './App.css';

function App() {

  const initialUserDetails = [];
  const [userDetails, setUserDetails] = useState(initialUserDetails);

  const addUser = (data) => {
    setUserDetails(prevUserDetails => {
      return [...prevUserDetails, data];
    });
  };

  const deleteUsrHandler = (username) => {
    setUserDetails(prevUserDetails => {
      return prevUserDetails.filter(u => u.username !== username);
    });
  }

  return (
    <div>
      <CreateUser userDetails={userDetails} addUser={addUser} />
      <UserList userDetails={userDetails} onDelete={deleteUsrHandler} />
    </div>
  );
}

export default App;
