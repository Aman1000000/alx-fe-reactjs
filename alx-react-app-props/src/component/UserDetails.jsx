import { useContext } from "react";
import UserBereket from "./UserBereket";

function UserDetails() {
    const userData= useContext(UserBereket);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;