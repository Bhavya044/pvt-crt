import React, { useState } from "react";

interface ISignupLoginProps {
  handleSubmit: (e: any) => void;
}
interface IUser {
  type: "login" | "signup";
  firstName: string;
  password: string;
  email: string;
  lastName?: string;
}
const SignupLoginForm: React.FC<ISignupLoginProps> = ({ handleSubmit }) => {
  const [userData, setUserData] = useState<IUser>({
    type: "login",
    firstName: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div className="border border-gray-700 flex p-6">
        <button>Login</button>
        <button>Signup</button>
      </div>
      <form>
        <label>First Name</label>
        <input type="string" />
        <label>First Name</label>
        <input type="string" />
      </form>
    </div>
  );
};
export default SignupLoginForm;
