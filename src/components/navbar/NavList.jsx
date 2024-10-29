import { useState, useEffect } from "react";

const NavList = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);

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
    </>
  );
};
export default NavList;
