import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashbord", {});
  };
  return (
    <div>
      <h1>Login</h1>
      {isAuth && <Navigate replace={true} to={"/dashbord"} />}
      <form onSubmit={handleSubmit}>
        <button>Login</button>
        <button onClick={() => setIsAuth(!isAuth)}>Toglle auth</button>
      </form>
    </div>
  );
}

export default Login;
