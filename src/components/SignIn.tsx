import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../api/api";

interface SignInFormData {
  username: string;
  password: string;
}
const SignIn: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SignInFormData>();
  const navigate = useNavigate();
  const [error, setError] = useState();
  console.log(error);

  const onSubmit = async (data: SignInFormData) => {
    try {
      const token = await signin(data.username, data.password);
      localStorage.setItem("token", token);
      navigate("/dashboard");
      reset();
    } catch (error) {
      setError(error);
    }
  };

  const handleClearForm = () => {
    reset(); // Reset the form fields
    setError(null); // Clear any error messages
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          {error && (
            <p style={{ color: "red" }}>Incorrect username or password</p>
          )}
        </div>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleClearForm}>
          Clear Form
        </button>
      </form>
      <p>
        Don't have an account ?<Link to="/signup">Sing up</Link>
      </p>
    </div>
  );
};

export default SignIn;
