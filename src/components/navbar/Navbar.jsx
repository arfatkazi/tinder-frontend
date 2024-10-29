import { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Modal from "../modal/Modal";
import NavList from "./NavList";

const Navbar = () => {
  const [openLogIn, setOpenLogIn] = useState(false);

  const openClickHandler = () => {
    setOpenLogIn(!openLogIn);
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
          <NavList />
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
