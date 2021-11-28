import React from "react";
import "./index.css";

const currencyData = [
  {
    coin_type: "Bitcoin",
    coin_abb: "BTC",
    coin_logo: "/assets/icons/bitcoin-q.jpg",
    coin_price: "$326441",
    coin_percentage: 1.24,
  },
  {
    coin_type: "Etherum",
    coin_abb: "ETH",
    coin_logo: "/assets/icons/etherum.jpg",
    coin_price: "$326441",
    coin_percentage: 0.24,
  },
];

const otherCurrencyData = [
  {
    coin_type: "Ripple",
    coin_abb: "XRP",
    coin_logo: "/assets/icons/riple-icon.png",
    coin_price: "$326441",
    coin_percentage: 1.24,
  },
  {
    coin_type: "Litecoin",
    coin_abb: "LTC",
    coin_logo: "/assets/icons/litecoin.png",
    coin_price: "$326441",
    coin_percentage: 1.24,
  },
];

const CurrencyCard = ({ currency_abb, currency_type, card_icon, coin_price, coin_percentage }) => {
  return (
    <div className="crypto-transacts">
      <div className="tansaction-left">
        <img src={card_icon} alt="icon" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
        <div>
          <p style={{ fontWeight: "bolder" }}>{currency_type}</p>
          <p style={{ color: "gray", fontSize: "smaller" }}>{currency_abb}</p>
        </div>
      </div>
      <div className="price-percentage">
        <p style={{ fontWeight: "bolder" }}>{coin_price}</p>
        <p className={coin_percentage < 1 ? "less-than-one" : "greater-than-one"}>
          {coin_percentage < 1 ? `- ${coin_percentage}%` : `+ ${coin_percentage}%`}
        </p>
      </div>
    </div>
  );
};

const PhoneImage = ({ phone_position }) => {
  return (
    <div className={phone_position ? phone_position : "phone-container"}>
      <div className="phone-container-header">
        <i className="fa fa-bars"></i>
        <p>Currencies</p>
        <img
          src="https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
          alt="imageme"
          style={{ width: "25px", height: "25px", borderRadius: "50%" }}
        />
      </div>

      <div>
        <div className="price">
          <p>$ 48 397.66</p>
        </div>
        <div className="all-transactions">
          <div className="transactions">
            <div className="transactions-header">
              <p className="heading-text">Favourite Currencies</p>
              <a href="/">
                see all <i className="fa fa-angle-right"></i>
              </a>
            </div>
            {currencyData.map((data, index) => {
              return (
                <div key={index}>
                  <CurrencyCard
                    card_icon={data.coin_logo}
                    coin_price={data.coin_price}
                    coin_percentage={data.coin_percentage}
                    currency_abb={data.coin_abb}
                    currency_type={data.coin_type}
                  />
                </div>
              );
            })}
          </div>
          <div className="other-transactions">
            <div className="transactions-header">
              <p className="heading-text">Other Currencies</p>
              <a href="/">
                see all <i className="fa fa-angle-right"></i>
              </a>
            </div>
            {otherCurrencyData.map((data, index) => {
              return (
                <div className="other-transaction">
                  <div key={index}>
                    <CurrencyCard
                      card_icon={data.coin_logo}
                      coin_price={data.coin_price}
                      coin_percentage={data.coin_percentage}
                      currency_abb={data.coin_abb}
                      currency_type={data.coin_type}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="phone-container-footer">
        <i className="fa fa-home"></i>
        <i className="fa fa-plane"></i>
        <i className="fa fa-cog"></i>
        <i className="fa fa-user"></i>
      </div>
    </div>
  );
};

export default PhoneImage;
