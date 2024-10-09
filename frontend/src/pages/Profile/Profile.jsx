import React, { Suspense, useContext } from "react";
import "./profile.scss";
import List from "../../components/List/List";
import Chat from "../../components/Chat/Chat";
import apiRequest from "../../helper/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../../context/AppContext";
import { toast } from "react-toastify";

const Profile = () => {

  const data = useLoaderData()

  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(Context);

  const handleLogout = async () => {
    const res = await apiRequest.post("/auth/logout");
    toast.success(res.data.msg);
    // alert(res.data.msg);
    updateUser(null);
    navigate("/");
  };

  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "10",
  
    fontSize: "25px",
    width: "100%",
    height: "65vh",
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
            <h2>My Posts</h2>
            <Link to="/add">
              <button>Add Post</button>
            </Link>
          </div>
          <Suspense fallback={<p style={loaderStyle}>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p style={loaderStyle}>Error loading posts!</p>}
          >
            {(postResponse) => 
            // console.log(postResponse.data.data)
            <List listData={postResponse.data.data}/>
            }
          </Await>
        </Suspense>
          {/* <List /> */}
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
