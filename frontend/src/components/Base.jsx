/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Img from "../assets/banner-center.png";
import "../styles/Base.css"; // Import custom CSS

function Base({ addBase, food, proceedToSides }) {
    const bases = ['Rice', 'Spaghetti', 'Beans'];

    return (
        <section className="py-16 md:py-32 px-8 md:px-32 lg:px-64 bg-[#EEEEEE] rounded-lg shadow-lg flex flex-col lg:flex-row justify-between items-center">
            {/* Left Section: Text and Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                <h1 className="text-xl md:text-2xl font-bold mb-6 text-center lg:text-left">
                    Select A Base for Your Order
                </h1>

                <ul className="space-y-4 text-center lg:text-left">
                    {bases.map(base => {
                        let spanClass = food.base === base 
                            ? 'active-item font-bold text-black' 
                            : 'text-gray-700';
                        return (
                            <li key={base} 
                                onClick={() => addBase(base)} 
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                            >
                                <span className={spanClass}>{base}</span>
                            </li>
                        );
                    })}
                </ul>

                {food.base && (
                    <button
                        onClick={proceedToSides} // Handle click to proceed to Sides
                        className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Next
                    </button>
                )}
            </div>

            {/* Right Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img className="w-2/3 md:w-[300px] h-auto" src={Img} alt="Base selection" />
            </div>
        </section>
    );
}

export default Base;
