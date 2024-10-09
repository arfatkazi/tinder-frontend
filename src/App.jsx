import React from "react";

const App = () => {
  return (
    <>
      <div className="navbar bg-base-100 mt-5">
        <div className="navbar-start ">
          <img src="./public/tinder_img.png" alt="tinderimg" className="w-20" />
          <h1 className="btn btn-ghost text-3xl ml-15 pt-1 text-white ">
            Tinder
          </h1>
        </div>
        <div className="navbar hidden lg:flex pt-5  text-white ">
          <ul className="menu menu-horizontal textarea-lg ">
            <li>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li>
                    <a>premium features</a>
                  </li>
                  <li>
                    <a>subscription tiers</a>
                  </li>
                  <li>
                    <a>tinder plus</a>
                  </li>
                  <li>
                    <a>tinder gold</a>
                  </li>
                  <li>
                    <a>tinder platinum</a>
                  </li>
                  <li>
                    <a>tinder select</a>
                  </li>
                </ul>
              </details>
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
        </div>
        <div className="navbar-end flex justify-center space-x-14  mt-5 capitalize">
          <a className="btn text-white text-lg">language</a>
          <a className="btn text-black bg-white px-10 text-lg font-bold  hover:bg-red-500 hover:text-white  transition">
            log in
          </a>
        </div>
      </div>
    </>
  );
};
export default App;
