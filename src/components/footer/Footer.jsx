import "./Footer.css";

import Cards from "../Cards/Cards";
import SocialMedia from "../Social-Media/SocialMedia";

const Footer = () => {
  return (
    <>
      <Cards />
      <SocialMedia />
      <div id="page-5">
        <div className="sec-1">
          <h2>Get the app!</h2>
          <a href="#">
            <img
              src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp"
              alt="app-store"
              className="app-store"
            />
          </a>
          <a href="#">
            <img
              src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp"
              alt="play-store"
              className="play-store"
            />
          </a>
          <p>
            Single people, listen up: If you’re looking for love, want to start
            dating, or just keep it casual, you need to be on Tinder. With over
            55 billion matches made, it’s the place to be to meet your next best
            match. Let’s be real, the dating landscape looks very different
            today, as most people are meeting online. With Tinder, the world’s
            most popular free dating app, you have millions of other single
            people at your fingertips and they’re all ready to meet someone like
            you. Whether you’re straight or in the LGBTQIA community, Tinder’s
            here to bring you all the sparks. There really is something for
            everyone on Tinder. Want to get into a relationship? You got it.
            Trying to find some new friends? Say no more. New kid on campus and
            looking to make the most of your college experience? Tinder U’s got
            you covered. Tinder isn’t your average dating site — it’s the most
            diverse dating app, where adults of all backgrounds and experiences
            are invited to make connections, memories, and everything in
            between.
          </p>
        </div>
      </div>

      <div id="page-6">
        <h3>FAQ</h3>
        <h3>/</h3>
        <h3>Safety Tips</h3>
        <h3>/</h3>
        <h3>Terms</h3>
        <h3>/</h3>
        <h3>Cookie Policy</h3>
        <h3>/</h3>
        <h3>Privacy Settings </h3>
        <h4>© 2024 Tinder LLC, All Rights Reserved.</h4>
      </div>
    </>
  );
};
export default Footer;
