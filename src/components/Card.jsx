import avatar from "../images/avatar-michelle.jpg";
import drawers from "../images/drawers.jpg";
import share_icon from "../images/icon-share.svg";
import fb from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import "../styles/Card.css";
import { useState } from "react";
const Card = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="card">
      <div className="image">
        <img src={drawers} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="card-text">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="footer">
          <div className="avatar-typography">
            <img className="avatar" src={avatar} alt="" />
            <div>
              <h3 className="name">Michelle Appleton</h3>
              <p className="birthday">28 Jun 2020</p>
            </div>
          </div>
          <button onClick={toggleVisible} className="icon_share_contain">
            <img className="share_icon" src={share_icon} alt="" />
          </button>
        </div>
      </div>
      {isVisible && (
        <div className="share_option">
          <p>share</p>
          <div className="social_media_icon">
            <a href="localhost:3000">
              <img src={fb} alt="" />
            </a>
            <a href="localhost:3000">
              <img src={twitter} alt="" />
            </a>
            <a href="localhost:3000">
              <img src={pinterest} alt="" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
export default Card;
