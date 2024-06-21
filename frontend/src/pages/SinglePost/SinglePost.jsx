import React from "react";
import "./singlePost.scss";
import Slider from "../../components/Slider/Slider";
import { singlePostData, userData } from "../../data/data";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import Map from "../../components/Map/Map";
import { FaRegMessage } from "react-icons/fa6";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="spLeft">
        <Slider images={singlePostData.images} />
        <div className="infoSection">
          <div className="infoLeft">
            <h2>{singlePostData.title}</h2>
            <div className="spLocation">
              <span>
                <CiLocationOn />
              </span>
              {singlePostData.address}
            </div>
            <div className="spPrice"> &#x24;{singlePostData.price}</div>
          </div>
          <div className="infoRight">
            <img src={userData.img} alt="" className="spUser" />
            <span>{userData.name}</span>
          </div>
        </div>
        <div className="spPara">{singlePostData.description}</div>
      </div>
      <div className="spRight">
        <div className="spWrapper">
          <p>General</p>
          <div className="generalBox">
            <div className="utilities">
              <img src="/utility.png" alt="" />
              <div className="utilityText">
                <h4>Utilities</h4>
                <span>Renter is responsible</span>
              </div>
            </div>
            <div className="pet">
              <img src="/pet.png" alt="" />
              <div className="petText">
                <h4>Pet Policy</h4>
                <span>Pet are allowed</span>
              </div>
            </div>
            <div className="fee">
              <img src="/fee.png" alt="" />
              <div className="feeText">
                <h4>Property Fees</h4>
                <span>Must have 3x the rent in total household income</span>
              </div>
            </div>
          </div>
          <p>Room Sizes</p>

          <div className="sizeBox">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p>Nearby Places</p>
          <div className="nearbyBox">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p>Location</p>
          <div className="mapBox">
            <Map item={[singlePostData]} />
            </div>
          <div className="spButtons">
            <div className="messageBtn">
              <FaRegMessage />
              <span>Sent a Message</span>
            </div>
            <div className="savePostBtn">
              <CiBookmark />
              <span> Save the Place</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
