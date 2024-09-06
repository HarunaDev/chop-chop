/* eslint-disable no-unused-vars */
import React from 'react';
import "../styles/Base.css"; // Reuse the same CSS styles
// import Img from "../assets/order-success.png"; 

const TakeOut = (prop) => {
  return (
    <section className="py-32 px-64 bg-[#EEEEEE] rounded-lg shadow-lg flex justify-between items-center">
      <div className="w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold mb-6">Thank you for your order :)</h2>
        <p className="text-xl mb-4">You ordered <strong>{prop.food.base}</strong> with:</p>
        
        <ul className="text-lg space-y-2">
          {prop.food.sides.length > 0 && (
            <li>
              <strong>Sides:</strong>
              <ul className="list-disc list-inside">
                {prop.food.sides.map((side) => (
                  <li key={side}>{side}</li>
                ))}
              </ul>
            </li>
          )}
          
          {prop.food.toppings.length > 0 && (
            <li>
              <strong>Toppings:</strong>
              <ul className="list-disc list-inside">
                {prop.food.toppings.map((topping) => (
                  <li key={topping}>{topping}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>

        <p className="mt-8 text-xl font-bold">Enjoy your meal!</p>
      </div>

      <div className="w-1/2 flex justify-center">
        <img className="w-[300px]" src="" alt="Order Success" />
      </div>
    </section>
  );
};

export default TakeOut;
