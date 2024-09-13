import "./Featuredproperties.css";

export const Featuredproperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/17/ca/06/17ca06c108252e23ed8f230c894fe736.jpg"
          alt="Akasha Beach Hotel"
          className="fpImg"
        />
        <span className="fpName">Akasha Beach Hotel</span>
        <span className="fpCity">Limenas</span>
        <span className="fpPrice">Starting from $120</span> 
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/ad/6b/a7/ad6ba7bf5446d0acbc39adb41cbc94c9.jpg"
          alt="Hotel Niko"
          className="fpImg"
        />
        <span className="fpName">Hotel Niko</span>
        <span className="fpCity">San Fransisco</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/b1/ed/33/b1ed33935f0357c30f90cfcf56eef8a0.jpg"
          alt="Mapara"
          className="fpImg"
        />
        <span className="fpName">Mapara</span>
        <span className="fpCity">Maldives</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/564x/e5/cf/42/e5cf42a6f04d318b11b42e9c58e515cd.jpg"
          alt="Andronis"
          className="fpImg"
        />
        <span className="fpName">Andronis</span>
        <span className="fpCity">Santori</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};
