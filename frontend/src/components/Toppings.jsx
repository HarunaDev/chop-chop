import { Link } from "react-router-dom";
import "../styles/Base.css"; // Reuse the same CSS from the Base component
import Img from "../assets/banner-center.png";

function Toppings(prop) {
    const toppings = ['Mushrooms', 'Olives', 'Peppers'];

    const addTopping = (topping) => {
        if (!prop.food.toppings.includes(topping)) {
            prop.setFood({ ...prop.food, toppings: [...prop.food.toppings, topping] });
        } else {
            // Allow deselecting a topping by clicking it again
            prop.setFood({
                ...prop.food,
                toppings: prop.food.toppings.filter((selectedTopping) => selectedTopping !== topping),
            });
        }
    };

    return (
        <section className="py-32 px-64 bg-[#EEEEEE] rounded-lg shadow-lg flex justify-between items-center">
            <div className="w-1/2 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold mb-6">Select Toppings for Your Order</h1>

                <ul className="space-y-4">
                    {toppings.map((topping) => {
                        let spanClass = prop.food.toppings.includes(topping)
                            ? 'active-item font-bold text-black' 
                            : 'text-gray-700';

                        return (
                            <li
                                key={topping}
                                onClick={() => addTopping(topping)}
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                            >
                                <span className={spanClass}>{topping}</span>
                            </li>
                        );
                    })}
                </ul>

                {prop.food.toppings.length > 0 && (
                    <Link to="/checkout">
                        <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                            Proceed to Checkout
                        </button>
                    </Link>
                )}
            </div>

            
            <div className="w-1/2 flex justify-center">
                <img className="w-[300px]" src={Img} alt="Base selection" />
            </div>
        </section>
    );
}

export default Toppings;
