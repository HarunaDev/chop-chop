/* eslint-disable no-unused-vars */
import React from 'react';
import "../styles/Base.css"; // Reuse the same CSS styles
// import Img from "../assets/order-success.png"; 

const TakeOut = (prop) => {
  const { base, sides, toppings } = prop.food;

  return (
    <section className="py-16 px-8 md:py-32 md:px-32 bg-[#EEEEEE] rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Thank you for your order :)</h2>
        
        <p className="text-lg md:text-xl mb-4">
          <strong>You ordered {base}
          {sides.length > 0 && ` with ${sides.join(", ")}`}
          {toppings.length > 0 && ` and topped with ${toppings.join(", ")}`}.</strong>
        </p>

        <p className="mt-8 text-lg md:text-xl font-bold">Enjoy your meal!</p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img className="w-[200px] md:w-[300px]" src="" alt="Order Success" />
      </div>
    </section>
  );
};

export default TakeOut;
