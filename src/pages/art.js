import React from "react";
import "./art.css"; // Skapa eller uppdatera din CSS-fil
import image1 from "../assets/images/korea.jpeg";
import image2 from "../assets/images/korea.jpeg";
import image3 from "../assets/images/korea.jpeg";
import image4 from "../assets/images/korea.jpeg";

const Art = () => {
  return (
    <div className="art-container">
      <h1 className="art-title">My Artwork</h1>
      
      <div className="art-gallery">
        <div className="art-item large">
          <img src={image1} alt="Artwork 1" />
        </div>
        <div className="art-item small">
          <img src={image2} alt="Artwork 2" />
        </div>
        <div className="art-item medium">
          <img src={image3} alt="Artwork 3" />
        </div>
        <div className="art-item full">
          <img src={image4} alt="Artwork 4" />
        </div>
      </div>
    </div>
  );
};

export default Art;
