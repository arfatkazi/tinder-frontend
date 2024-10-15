import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);

  const mouseEnterHandler = () => {
    setIsProductOpen(true);
  };

  const mouseLeaveHandler = () => {
    setIsProductOpen(false);
  };

  const safetyHandler = () => {
    setIsSafetyOpen(true);
  };

  const safetyleaveHandler = () => {
    setIsSafetyOpen(false);
  };
  return (
    <>
      <div className="navbar text-white ">
        <div className="left">
          <img
            src="./public/tinder_img.png"
            alt="tinder-img-nav"
            className="tinder-img"
          />
          <h1>tinder</h1>
          <ul className="nav-list">
            <li
              className="product-list"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <a className="products">products</a>
              {isProductOpen && (
                <div className="dropdown">
                  <h5>
                    <span>premium features</span>
                  </h5>
                  <h5>
                    <span>subscription tiers</span>
                  </h5>
                  <h5>
                    <span>tinder gold</span>
                  </h5>
                  <h5>
                    <span>tinder platinum</span>
                  </h5>
                  <h5>
                    <span>tinder plus</span>
                  </h5>
                  <h5>
                    <span>tinder select</span>
                  </h5>
                </div>
              )}
            </li>
            <li>
              <a>learn</a>
            </li>
            <li
              className="safety-list"
              onMouseEnter={safetyHandler}
              onMouseLeave={safetyleaveHandler}
            >
              <a>safety</a>
              {isSafetyOpen && (
                <div className="dropdown">
                  <h5>
                    <span>community guidelines</span>
                  </h5>
                  <h5>
                    <span>safety tips</span>
                  </h5>
                  <h5>
                    <span>safety and policies</span>
                  </h5>
                  <h5>
                    <span>safety and reporting</span>
                  </h5>
                  <h5>
                    <span>security</span>
                  </h5>
                </div>
              )}
            </li>
            <li>
              <a className="support">support</a>
            </li>
            <li>
              <a className="download">download</a>
            </li>
          </ul>
        </div>

        <div className="right">
          <h2>language</h2>
          <button>Log in</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
