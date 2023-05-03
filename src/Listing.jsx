import React from "react";

export const Listing = ({ items }) => {
  const price = (item) => {
    if (item.currency_code === "USD") {
      return "$" + item.price;
    } else if (item.currency_code === "EUR") {
      return "€" + item.price;
    } else {
      return item.price + " " + item.currency_code;
    }
  };
  return (
    <div className="item-list">
      {items.map((item) => {
        if (!item.MainImage) {
          return null;
        }
        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt={item.title}></img>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{price(item)}</p>
              <p className="item-quantity level-medium">{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
