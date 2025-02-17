import React, { useState } from "react";
import TShirt from "./TShirt";
import tshirtsData from "./t-shirts";

const TShirtList = () => {
  const [tshirts, setTshirts] = useState(tshirtsData);

  const handleBuy = (title, quantity) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) =>
        tshirt.title === title
          ? { ...tshirt, stock: Math.max(tshirt.stock - quantity, 0) }
          : tshirt
      )
    );
  };

  return (
    <div className="tshirt-list">
      {tshirts.map((tshirt) => (
        <TShirt
          key={tshirt.title}
          title={tshirt.title}
          price={tshirt.price}
          stock={tshirt.stock}
          image={tshirt.image}
          onBuy={handleBuy}
        />
      ))}
    </div>
  );
};

export default TShirtList;
