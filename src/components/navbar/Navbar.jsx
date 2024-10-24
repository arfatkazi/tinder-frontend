import { useState, useEffect } from "react";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Modal from "../modal/Modal";

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);

  const openClickHandler = () => {
    setOpenLogIn(!openLogIn);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".product-list") && isProductOpen) {
      setIsProductOpen(false);
    }
    if (!event.target.closest(".safety-list") && isSafetyOpen) {
      setIsSafetyOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProductOpen, isSafetyOpen]);

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
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
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
              onMouseEnter={() => setIsSafetyOpen(true)}
              onMouseLeave={() => setIsSafetyOpen(false)}
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

          <button onClick={openClickHandler}>Log in</button>
        </div>
        <HiOutlineMenuAlt3 className="burger-menu" />
      </div>
      {openLogIn && <Modal></Modal>}
    </>
  );
};

export default Navbar;
