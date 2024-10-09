import React, { useState } from "react";
import "./chat.scss";
import { RxCross2 } from "react-icons/rx";

const Chat = () => {
  const [chat, setChat] = useState(null);
  const chatData = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "John Doe",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="chatWrapper">
      <h2>Messages</h2>
      <div className="messageBox">
        {chatData.map((item) => {
          return (
            <div
              className="message"
              key={item.id}
              onClick={() => setChat(item.id)}
            >
              <img src={item.img} alt="" />
              <b>{item.name}</b>
              <p>Lorem ipsum dolor sit amet ...?</p>
            </div>
          );
        })}
      </div>
      {chat !== null && (
        <div className="chatBox">
          <div className="chatUser">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <b className="chatUserName">John Doe</b>
            <span onClick={() => setChat(null)}>
              <RxCross2 />
            </span>
          </div>
          <div className="chatMessages">
            <div className="chatting">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatting own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatting">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatting own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatting own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatting ">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="sendButton">
            <input type="text" />
            <div className="sendBtn">Send</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
