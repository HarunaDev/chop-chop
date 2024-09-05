// import { Link } from "react-router-dom";
import "../styles/Base.css"; // Reuse the same CSS from the Base component
import Img from "../assets/banner-center.png";

function Sides(prop) {
    const sides = ['Salad', 'Fries', 'Garlic Bread'];

    const addSide = (side) => {
        if (!prop.food.sides.includes(side)) {
            prop.setFood({ ...prop.food, sides: [...prop.food.sides, side] });
        } else {
            prop.setFood({
                ...prop.food,
                sides: prop.food.sides.filter((selectedSide) => selectedSide !== side),
            });
        }
    };

    return (
        <section className="py-32 px-64 bg-gray-100 rounded-lg shadow-lg flex justify-between items-center">
            <div className="w-1/2 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold mb-6">Select Sides for Your Order</h1>

                <ul className="space-y-4">
                    {sides.map((side) => {
                        let spanClass = prop.food.sides.includes(side)
                            ? 'active-item font-bold text-black' 
                            : 'text-gray-700';

                        return (
                            <li
                                key={side}
                                onClick={() => addSide(side)}
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                            >
                                <span className={spanClass}>{side}</span>
                            </li>
                        );
                    })}
                </ul>

                {prop.food.sides.length > 0 && (
                    <button
                        onClick={prop.proceedToToppings} // Handle click to proceed to Toppings
                        className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Next
                    </button>
                )}
            </div>

            
            <div className="w-1/2 flex justify-center">
                <img className="w-[300px]" src={Img} alt="Base selection" />
            </div>
        </section>
    );
}

export default Sides;
