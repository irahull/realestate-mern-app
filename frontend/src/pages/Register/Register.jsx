import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../helper/apiRequest";
import { toast } from "react-toastify";

const Register = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      if (res.data.success === true) {
        toast.success("Registration Successfull");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setErr(error.response.data.msg);
    }finally{
      setLoading(true)
    }
  };
  return (
    <div className="registerWrapper">
      <div className="registerLeft">
        <form className="rlBox" onSubmit={handleRegister}>
          <h3>Create an Account</h3>
          <div className="inpBox">
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            {err && <span className="errorText">{err}</span>}
            <div className="registerBtn">
              <button disabled={loading}>Register</button>
            </div>
          </div>
        </form>
      </div>
      <div className="registerRight">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
