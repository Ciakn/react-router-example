import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault()
    navigate("/dashbord", {});
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
