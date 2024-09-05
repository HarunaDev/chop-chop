import { Link } from "react-router-dom";
import "../styles/Base.css"; // Reuse the same CSS from the Base component

function Sides(prop) {
    const sides = ['Salad', 'Fries', 'Garlic Bread'];

    const addSide = (side) => {
        // Prevent duplicate sides from being added
        if (!prop.food.sides.includes(side)) {
            prop.setFood({ ...prop.food, sides: [...prop.food.sides, side] });
        }
    };

    return (
        <section className="py-32 px-64 bg-gray-100 rounded-lg shadow-lg">
            <div className="w-full flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold mb-6">Select Sides for Your Order</h1>

                <ul className="space-y-4">
                    {sides.map((side) => {
                        // Apply the 'active-item' class if the side is selected
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
                    <Link to="/toppings">
                        <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                            Next
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}

export default Sides;
