import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/276417560.webp?k=420289e233e82f97f10a55c5b37aa4a56ffdb4c9255d85523b94a871856d0632&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/569668424.webp?k=41855654ab2f4eabb4b282af8069bc47c1154179c16744e53d16ace73dd7b5c4&o="
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
          src="https://cf.bstatic.com/xdata/images/hotel/square600/371753409.webp?k=1c6d41330db3ca72acb9733950cb8aeea0bffd50dee51a9899d5d67e1e982425&o="
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
