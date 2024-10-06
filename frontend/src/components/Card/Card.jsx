import React from 'react';
import "./card.scss";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

const Card = ({item}) => {
  console.log(item)
  return (
    <div className='card' key={item.id}>
        <div className="cardLeft">
          <img src={item.media} alt="" />
        </div>
        <div className="cardRight">
          <h2>{item.title}</h2>
          <div className="location">
            <CiLocationOn />
            <span>{item.address}</span>
          </div>
        <div className="price"> &#8377;{item.price}</div>
        <div className="cardBottom">
          <div className="rooms">
          <p><IoBedOutline /> <span>{item.bedroom} Bedroom</span> </p>
          <p><LuBath /> <span>{item.bathroom} Bathroom</span> </p>
          

          </div>
          <div className="bookmark">
           <span> <CiBookmark /></span>
           <span> <FaRegMessage /></span>
            

          </div>
        </div>
        </div>
    </div>
  )
}

export default Card