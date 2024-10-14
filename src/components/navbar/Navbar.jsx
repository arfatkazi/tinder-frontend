import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar text-white ">
        <img
          src="./public/tinder_img.png"
          alt="tinder-img-nav"
          className="tinder-img"
        />
        <h1 className="shadow-lg">tinder</h1>
        <ul className="nav-list">
          <li>
            <a>products</a>
          </li>
          <li>
            <a>learn</a>
          </li>
          <li>
            <a>safety</a>
          </li>
          <li>
            <a>support</a>
          </li>
          <li>
            <a>download</a>
          </li>
        </ul>
        <div className="right">
          <h2>language</h2>
          <button>Log in</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
