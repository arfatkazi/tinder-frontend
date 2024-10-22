import "../Cards/Cards.css";
import "../../data.js";
import tinderCardsData from "../../data.js";
const Cards = () => {
  return (
    <>
      <div id="page3">
        <div id="moving-cards">
          <div className="left-blur"></div>
          {tinderCardsData.map(({ name, description, id }) => {
            return (
              <>
                <div className="cards-move">
                  {/* cards */}
                  <div id="card" key={id}>
                    <h4>{name}</h4>
                    <div id="underline"></div>
                    <p>{description}</p>
                  </div>
                  {/*end of  cards */}
                </div>
              </>
            );
          })}

          <div className="right-blur"></div>
        </div>
      </div>
    </>
  );
};
export default Cards;
