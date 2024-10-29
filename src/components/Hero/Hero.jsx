import { useState } from "react";
import "./Hero.css";
import Modal from "../modal/Modal";
const Hero = () => {
  const [isOpenHero, setIsHero] = useState(false);
  const openClickModel = () => {
    setIsHero(!isOpenHero);
  };
  return (
    <>
      <div className="herosection ">
        <img
          src="./public/tinderHero.png"
          alt="tinderhero-img"
          className="tinderhero"
        />

        <h1 className="hero-title">Start something epic.</h1>
        <button className="createbtn" onClick={openClickModel}>
          Create account
        </button>
        <button className="createbtn login">Log in</button>
      </div>
      {isOpenHero && <Modal />}
    </>
  );
};
export default Hero;
