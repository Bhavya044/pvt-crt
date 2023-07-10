import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../utils/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IUser {
  type: "login" | "signup";
  _id?: string;
  username: string;
  password: string;
  email?: string;
}

const SignupForm: React.FC = () => {
  const [userData, setUserData] = useState<IUser>({
    type: "login",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axiosConfig.post(
        userData?.type === "signup" ? "/register" : "/login",
        {
          username: userData.username,

          ...(userData?.type === "signup" ? { email: userData.email } : {}),
          password: userData.password,
        }
      );
      if (data?.statusCode === 0) {
        localStorage.setItem("user", JSON.stringify(data?.user)); // Save user data in localStorage
        toast(data.message);
        navigate("/dashboard");
      } else {
        toast(data.error);
      }
    } catch (error) {
      toast(error);
      console.error(error);
    }
  };

  const handleChange = (key: string, value: string | number) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="form">
      <div className="type-select">
        <button onClick={() => handleChange("type", "login")}>Login</button>
        <button onClick={() => handleChange("type", "signup")}>SignUp</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </div>
        {userData?.type === "signup" ? (
          <div className="input-container">
            <label>Email </label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        ) : null}

        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
