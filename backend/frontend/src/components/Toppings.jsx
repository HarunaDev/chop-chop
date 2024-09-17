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
        <section className="py-16 md:py-32 px-8 md:px-32 lg:px-64 bg-[#EEEEEE] rounded-lg shadow-lg flex flex-col lg:flex-row justify-between items-center">
            {/* Left Section: Text and Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                <h1 className="text-xl md:text-2xl font-bold mb-6 text-center lg:text-left">
                    Select Toppings for Your Order
                </h1>

                <ul className="space-y-4 text-center lg:text-left">
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
                    <button
                        onClick={prop.proceedToShowOrder} // Handle click to proceed to Checkout
                        className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Proceed to Checkout
                    </button>
                )}
            </div>

            {/* Right Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img className="w-2/3 md:w-[300px] h-auto" src={Img} alt="Toppings selection" />
            </div>
        </section>
    );
}

export default Toppings;
