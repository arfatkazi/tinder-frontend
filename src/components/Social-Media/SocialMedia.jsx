import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import "../Social-Media/SocialMedia.css";
const SocialMedia = () => {
  return (
    <>
      <div id="page4">
        <div className="section-1">
          <h2>legal</h2>
          <h3>Privacy</h3>
          <h3>Consumer Health Data Privacy Policy</h3>
          <h3>Terms</h3>
          <h3>Cookie Policy</h3>
          <h3>Intellectual Property</h3>
        </div>

        <div className="section-2">
          <h2>Careers</h2>
          <h3>Careers Portal</h3>
          <h3>Tech Blog</h3>
        </div>

        <div className="section-3">
          <h2>Social</h2>
          <div className="icons">
            <FaInstagram className="icon" />
            <FaTiktok className="icon" />
            <AiOutlineYoutube className="icon" />
            <FaTwitter className="icon" />
            <FaFacebookF className="icon" />
          </div>
        </div>

        <div className="section-4">
          <h2>FAQ</h2>
          <h3>Destinations</h3>
          <h3>Press Room</h3>
          <h3>Contact</h3>
          <h3>Promo Codey</h3>
        </div>
      </div>
    </>
  );
};
export default SocialMedia;
