import React, { useContext } from "react";
import "./profile.scss";
import List from "../../components/List/List";
import Chat from "../../components/Chat/Chat";
import apiRequest from "../../helper/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/AppContext";

const Profile = () => {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(Context);

  const handleLogout = async () => {
    const res = await apiRequest.post("/auth/logout");
    alert(res.data.msg);
    updateUser(null);
    navigate("/");
  };
  return (
    <div className="profileWrapper">
      <div className="profileLeft">
        <div className="userInfo">
          <h2>User Information</h2>
          <Link to={`/edit/${currentUser?.id}`}>
            <button>Update Profile</button>
          </Link>
        </div>
        <div className="userDetails">
          <div className="avatar">
            <span>Avatar:</span>
            <img src={currentUser?.avatar || "/avatar.png"} alt="" />
          </div>
          <div className="userName">
            <span>Username:</span>
            <b>{currentUser?.username}</b>
          </div>
          <div className="email">
            <span>E-mail:</span>
            <b>{currentUser?.email}</b>
          </div>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="myList">
          <div className="listHeading">
            <h2>My List</h2>
            <Link to="/add">
              <button>Add Post</button>
            </Link>
          </div>
          <List />
        </div>
        {/* <div className="savedList">
          <h2>Saved List</h2>
          <List />
        </div> */}
      </div>
      <div className="profileRight">
        <Chat />
      </div>
    </div>
  );
};

export default Profile;
