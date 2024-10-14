import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="herosection bg-blue-500 ">
        <img
          src="./public/tinderHero.png"
          alt="tinderhero-img"
          className="tinderhero"
        />

        <h1 className="hero-title">Start something epic.</h1>
        <button className="createbtn">Create account</button>
      </div>
    </>
  );
};
export default Hero;
