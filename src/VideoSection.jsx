import React, { useState, useRef } from "react";
import "./VideoSection.css";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const vid001 = `https://player.vimeo.com/external/271611326.sd.mp4?s=3c5d20003a97a14d38832283944cc78da3d60082&profile_id=164&oauth2_token_id=57447761`;
  return (
    <section className="video__section">
      <div className="video__container">
        <div className="video__overlay"></div>
        <video ref={videoRef} className="video__video" loop muted autoPlay>
          <source src={vid001} type="video/mp4" />
        </video>
        <button className="video__btn" onClick={togglePlay}>
          {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
