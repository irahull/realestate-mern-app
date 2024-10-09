import { useNavigate } from "react-router-dom";
import { footer } from "../../data/data";
import { FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {  } from "react-icons/fa";


import "./footer.css";

const Footer = () => {

  const navigate = useNavigate()


  return (
    <>
    
        {/* <section className="footerContact">
          <div className="container">
            <div className="send flex">
              <div className="text">
                <h1>Do You Have Questions ?</h1>
                <p>We'll help you to grow your career and growth.</p>
              </div>
              <button className="btn5">Contact Us Today</button>
            </div>
          </div>
        </section> */}
     

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" className="inpP" />
                <button className="btn0">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box newBox">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li onClick={()=> navigate(items.path)}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="socialIcons">
            <h3>Socials</h3>
          <div className="icons">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram/>
          <MdEmail />
          
          </div>

          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 . Designd By Rahul.</span>
      </div>
    </>
  );
};

export default Footer;
