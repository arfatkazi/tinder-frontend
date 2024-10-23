import "./Modal.css";
import { RxCross2 } from "react-icons/rx";
const Modal = ({ closeModel }) => {
  const outsideClickHandler = (e) => {
    if (e.target.classList.contains("modal-container")) {
      closeModel();
    }
  };
  return (
    <>
      <div
        className="modal-container"
        role="dialog"
        aria-labelledby="model-title"
        aria-describedby="model-description"
        onClick={outsideClickHandler}
      >
        <RxCross2
          className="modal-cross"
          onClick={closeModel}
          aria-label="Close"
        />
        <img
          src="./tinder_icon.png"
          alt="tinder-img"
          className="modal-tinderimg"
        />
        <h1>Get Started</h1>
        <h4>
          By tapping Log in or Continue, you agree to our <a href="#">Terms</a>.
          Learn how we process your data in out <a href="#">Privacy Policy</a>
          ,and <a href="#">Cookie Policy.</a>
        </h4>

        <div className="google-design">
          <div className="google-icon">
            <img src="./google_icon.png" alt="" />
            <h3>continue with google</h3>
          </div>
        </div>
        <h3>more options</h3>
        <h2> Get the app!</h2>
        <div className="img-container">
          <img
            src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp"
            className="modal-appimg"
            alt="modalapp-img"
          />

          <img
            src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp"
            className="modal-playimg"
            alt="modal-play-img"
          />
        </div>
      </div>
    </>
  );
};
export default Modal;
