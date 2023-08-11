import React, { useState } from "react";
import left from "../images/icon/arrow__left.svg";
import right from "../images/icon/arrow__right.svg";
import "./SlideProject.css";

function SlideProject(props) {
  const { imgSrc, imgAlt } = props;
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextPicture() {
    setImageIndex((prevIndex) => (prevIndex + 1) % imgSrc.length);
  }

  function handlePreviousPicture() {
    setImageIndex((prevIndex) => (prevIndex - 1 + imgSrc.length) % imgSrc.length);
  }

  return (
    <div className="slide__project">
      <div className="slide__show">
        <img src={imgSrc[imageIndex]} alt={imgAlt} className="slide__show--image" />
        {imgSrc.length > 1 && (
          // Afficher les flèches de navigation uniquement s'il y a plus d'une image
          <>
            <button className="button__arrow" onClick={handlePreviousPicture}>
              <img src={left} className="button__arrow--left" alt="arrow-left" />
            </button>
            <button className="button__arrow" onClick={handleNextPicture}>
              <img src={right} className="button__arrow--right" alt="arrow-right" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SlideProject;