import React, { useState } from "react";
import "./slider.scss";
import { RxCross2 } from "react-icons/rx";
import { MdNavigateNext } from "react-icons/md";

const Slider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(null);
  const handleSlide = (type) => {
    if (type === "next") {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    } else {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    }
  };
  return (
    <div className="sliderWrapper">
      {imgIndex !== null ? (
        <div className="imgGallery">
          <div className="imgClose" onClick={() => setImgIndex(null)}>
            <RxCross2 />
          </div>
          <div className="prev" onClick={() => handleSlide("prev")}>
            <MdNavigateNext />
          </div>

          <img src={images[imgIndex]} alt="" />
          <div className="next" onClick={() => handleSlide("next")}>
            <MdNavigateNext />
          </div>
        </div>
      ) : (
        <>
          <div className="bigImage">
            <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
          </div>
          <div className="smallImages" style={{ overflowY: "scroll" }}>
            {images.slice(1).map((item, ind) => {
              return (
                <img
                  src={item}
                  alt=""
                  key={ind}
                  onClick={() => setImgIndex(ind + 1)}

                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
