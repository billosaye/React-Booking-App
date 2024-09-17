import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://ik.imgkit.net/3vlqs5axxjf/external/http://media.iceportal.com/109055/photos/64237910_XL.jpg?tr=w-1200%2Cfo-auto"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Moscow</h1>
          <h2>40 properties </h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://content.r9cdn.net/rimg/himg/89/6f/79/ice-143159-72195202_3XL-132345.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kyiv</h1>
          <h2>140 properties </h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.findmombasahotels.com/wp-content/uploads/2009/07/Leopard-Beach-Resort-Spa-Mombasa.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Malibu</h1>
          <h2>14 properties </h2>
        </div>
      </div>
    </div>
  );
};
