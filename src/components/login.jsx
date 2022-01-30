import React, { useState } from "react";

function LoginForm(props) {
  let errors = {},
    setErrors;
  let userAccount = {
    username: "",
    password: "",
  };
  let setUserAccount;
  [userAccount, setUserAccount] = useState({});
  [errors, setErrors] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const errors = {};
    const { target: input } = e;
    const submitteduseName = input["username"].value;
    const submittedPassword = input["password"].value;
    
    if (submitteduseName === "") {
      errors.username = "username is required";
    }
    if (submittedPassword === "") {
      errors.password = "password is required";
    }
    setErrors(errors);
  }

  function handleChange({ target: input }) {
    const errors = {};
    userAccount[input.name] = input.value;
    console.log("userAccount[input.name]",userAccount[input.name]);
    if(userAccount[input.name] === ""){
      errors[input.name] = `${input.name} is required`
    }
    if(errors !== {})
      setErrors(errors);

    setUserAccount(userAccount);
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Login Form</legend>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name
        </label>
        <input
          onChange={handleChange}
          value={userAccount.username}
          id="username"
          name="username"
          type="text"
          className="form-control"
        />
        {errors && errors.username && (
          <div className="alert alert-danger">{errors.username}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          value={userAccount.password}
          id="password"
          type="password"
          name="password"
          className="form-control"
        />
        {errors && errors.password && (
          <div className="alert alert-danger">{errors.password}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
