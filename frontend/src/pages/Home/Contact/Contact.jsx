import React, { useState } from "react";
import "./contact.scss";
import CbLeftBg from "/contact/clBg.png";
import apiRequest from "../../../helper/apiRequest";
import { toast } from "react-toastify";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
  });

  const notify = () => toast.success("Message Sent Successfully");

  const handleMessageChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await apiRequest.post("/message", message);
      if (res.data.success) {
        notify;
        notify("Message sent successfully");
        setMessage({
          name: "",
          contact: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="contactWrapper">
      <div className="contactTop">
        <div className="contactHeading">
          <h1>Say</h1>
          <h1 className="cLine"></h1>
        </div>
        <div className="contactSubheading">
          We are available to assist you and respond to any queries you may
          have. We anticipate hearing from you. Please don't hesitate to contact
          us if you need anything.
        </div>
      </div>
      <div className="contactBottom">
        <div className="cbLeft">
          <img src={CbLeftBg} alt="" className="cblBg" />

          <div className="cblText">
            <h3> What's puzzling</h3>
            <div className="cblText2">YOU?</div>
          </div>
        </div>
        <div className="cbRight">
          <form className="cbInp">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={message.name}
              onChange={handleMessageChange}
            />
            <div className="contactMail">
              <input
                type="number"
                placeholder="Contact Number"
                name="contact"
                value={message.contact}
                onChange={handleMessageChange}
              />
              <input
                type="email"
                placeholder="Mail ID"
                name="email"
                value={message.email}
                onChange={handleMessageChange}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={message.subject}
              onChange={handleMessageChange}
            />
            <textarea
              name="message"
              id=""
              rows={4}
              placeholder="Message"
              value={message.message}
              onChange={handleMessageChange}
            ></textarea>
            <button
              type="submit"
              className="submitButton"
              onClick={handleMessage}
            >
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
