import React, { useState } from "react";
import SignupLoginForm from "../components/Form";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  return <SignupLoginForm handleSubmit={handleSubmit} />;
};

export default SignupForm;
