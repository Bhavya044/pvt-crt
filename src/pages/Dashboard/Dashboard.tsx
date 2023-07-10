import React, { useEffect, useState } from "react";
import axiosConfig from "../../utils/Axios";
import { IUser } from "../Signup/Signup";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try {
      const { data } = await axiosConfig.get("/users");
      if (data?.statusCode === 0) {
        setUsers(data?.users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear the user data from localStorage
    navigate("/signUp"); // Navigate to the register page
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const userData = localStorage.getItem("user");
  if (!userData) {
    navigate("/signup"); // Redirect to signup page if user data doesn't exist
    return null; // Render nothing
  }

  const user = JSON.parse(userData) as IUser;

  return (
    <div>
      <div className="logout-button">
        <div>
          {" "}
          Logged in as:
          <span style={{ fontWeight: "bold" }}> {user?.username}</span>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>User List</h1>

      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
