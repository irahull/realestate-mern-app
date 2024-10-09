import React, { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../helper/apiRequest";
import { Context } from "../../context/AppContext";
import { toast } from "react-toastify";

const Login = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const {updateUser} = useContext(Context);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      if (res.data.success === true) {
        toast.success("Login Successfull");
        const data =  res.data.user
        updateUser(data);
        navigate("/");
      }
    } catch (error) {
      // setErr(error.response.data.msg);
      console.log(error)
      toast.warn("Enter correct username and password");
    } finally {
      setLoading(true);
    }
  };
  return (
    <div className="loginWrapper">
      <div className="loginLeft">
        <form className="llBox" onSubmit={handleLogin}>
          <h3>Welcome Back</h3>
          <div className="inpBox">
            <input
              name="username"
              required
              minLength={3}
              maxLength={20}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            {err && <span className="errorText">{err}</span>}
            <div className="loginBtn">
              <button disabled={loading}>Login</button>
            </div>
          </div>
        </form>
      </div>
      <div className="loginRight">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
