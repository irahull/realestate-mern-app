import React from "react";
import "./singlePost.scss";
import Slider from "../../components/Slider/Slider";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import Map from "../../components/Map/Map";
import { FaRegMessage } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

const SinglePost = () => {
  const postData = useLoaderData();
  console.log(postData);
  return (
    <div className="singlePost">
      <div className="spLeft">
        <Slider images={postData.media} />
        <div className="infoSection">
          <div className="infoLeft">
            <h2>{postData.title}</h2>
            <div className="spLocation">
              <span>
                <CiLocationOn />
              </span>
              {postData.address}
            </div>
            <div className="spPrice"> &#8377;{postData.price}</div>
          </div>
          <div className="infoRight">
            <img
              src={postData.user.avatar || "/avatar.png"}
              alt=""
              className="spUser"
            />
            <span>{postData.user.username}</span>
          </div>
        </div>
        <div
          className="spPara"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(postData.postDetails.desc),
          }}
        ></div>
      </div>
      <div className="spRight">
        <div className="spWrapper">
          <p>General</p>
          <div className="generalBox">
            <div className="utilities">
              <img src="/utility.png" alt="" />
              <div className="utilityText">
                <h4>Utilities</h4>
                <span
                  style={{
                    textTransform: "uppercase",
                  }}
                >
                  {postData.postDetails.utilities} is responsible
                </span>
              </div>
            </div>
            <div className="pet">
              <img src="/pet.png" alt="" />
              <div className="petText">
                <h4>Pet Policy</h4>
                <span>
                  {postData.postDetails.petPolicy === "allowed"
                    ? "Pets are allowed"
                    : "Pets are not allowed"}
                </span>
              </div>
            </div>
            <div className="fee">
              <img src="/fee.png" alt="" />
              <div className="feeText">
                <h4>Property Fees</h4>
                <span>{postData.postDetails.income}</span>
              </div>
            </div>
          </div>
          <p>Room Sizes</p>

          <div className="sizeBox">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{postData.postDetails.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{postData.bedroom} bedroom</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{postData.bathroom} bathroom</span>
            </div>
          </div>

          <p>Nearby Places</p>
          <div className="nearbyBox">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{postData.postDetails.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{postData.postDetails.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{postData.postDetails.bus}m away</p>
              </div>
            </div>
          </div>
          <p>Location</p>
          <div className="mapBox">
            <Map item={[postData]} />
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
