const Navbar = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="navbar bg-transparent  ">
        {/*START  OF  tinder-image|| tindertitle */}
        <div className="navbar-start  mt-2 ">
          <img src="./public/tinder_img.png" alt="tinderimg" className="w-20" />
          <h1 className="btn btn-ghost text-3xl ml-15  text-white ">Tinder</h1>
        </div>

        {/*END  OF  tinder-image|| tindertitle */}

        {/*START  OF  middle navbar|| tindertitle */}

        <div className="navbar hidden lg:flex pt-5  text-white  ">
          <ul className="menu menu-horizontal textarea-lg capitalize font-bold ">
            <li>
              <details>
                <summary className="hover:text-red-500">Products</summary>
                <ul className="p-2 px-2 bg-transparent capitalize text-white shadow-none">
                  <li>
                    <a className="text-nowrap">premium features</a>
                  </li>
                  <li>
                    <a className="text-nowrap">subscription tiers</a>
                  </li>
                  <li>
                    <a className="text-nowrap">tinder plus</a>
                  </li>
                  <li>
                    <a className="text-nowrap">tinder gold</a>
                  </li>
                  <li>
                    <a className="text-nowrap">tinder platinum</a>
                  </li>
                  <li>
                    <a className="text-nowrap">tinder select</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>learn</a>
            </li>

            <li>
              <details>
                <summary className="safetylist">safety</summary>
                <ul className="px-2 bg-transparent capitalize text-white  shadow-none safetydroplists ">
                  <li>
                    <a className="text-nowrap"> community guidelines</a>
                  </li>

                  <li>
                    <a className="text-nowrap"> safety tips</a>
                  </li>

                  <li>
                    <a className="text-nowrap"> safety and reporting</a>
                  </li>
                  <li>
                    <a className="text-nowrap"> safety and policy</a>
                  </li>

                  <li>
                    <a className="text-nowrap">security</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>support</a>
            </li>
            <li>
              <a>download</a>
            </li>
          </ul>
        </div>
        {/*end  OF  middle navbar|| products,learn,safety,support */}

        {/*start  OF  end navbar|| language login */}

        <div className="navbar-end flex justify-center space-x-14  mt-5 capitalize">
          <a className="btn text-white text-xl">language</a>
          <a className="btn text-black bg-white px-10 text-lg font-bold transition duration-200 ease-in-out  hover:bg-red-500 hover:text-white ">
            log in
          </a>
        </div>
        {/*end  OF  emd navbar|| language login */}
      </div>
    </>
  );
};
export default Navbar;
