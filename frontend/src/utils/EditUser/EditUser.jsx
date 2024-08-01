import React, { useContext, useState } from "react";
import "./editUser.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../helper/apiRequest";
import { Context } from "../../context/AppContext";
import Upload from "../../helper/upload";

const EditUser = () => {
  const { currentUser, updateUser } = useContext(Context);
  const [avatar, setAvatar] = useState([]);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await apiRequest.put(`/user/update/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });

      updateUser(res.data.data);
      navigate("/profile");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="editUser">
      <div className="editUserLeft">
        <form className="rlBox" onSubmit={handleUserUpdate}>
          <h3>Create an Account</h3>
          <div className="inpBox">
            <input
              type="text"
              name="username"
              placeholder="Username"
              defaultValue={currentUser.username}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={currentUser.email}
            />
            <input type="password" name="password" placeholder="Password" />
            {err && <span className="errorText">{err}</span>}
            <div className="editUserBtn">
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
      <div className="editUserRight">
        <img src={avatar[0] || currentUser.avatar || "/avatar.png"} alt="" />

        <div className="uploadFile">
          <Upload
            uwConfig={{
              cloudName: "letsgrow121",
              uploadPreset: "realState",
              multiple: false,
              maxImageSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
