import React, { useState } from "react";

const TShirt = ({ title, price, stock, image, onBuy }) => {
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    onBuy(title, quantity);
  };

  return (
    <div className="tshirt-card">
      <img src={image} alt={title} />
      <h2 className="tshirt-name">{title}</h2>
      <p className="tshirt-price">${price.toFixed(2)}</p>
      <p className="stock-info">{stock > 0 ? `${stock} left!` : "Out of Stock"}</p>
      
      {stock > 0 && (
        <div className="purchase-container">
          <select
            className="quantity-dropdown"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[...Array(Math.min(stock, 5)).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <button className="buy-button" onClick={handleBuy}>Buy</button>
        </div>
      )}
    </div>
  );
};

export default TShirt;
