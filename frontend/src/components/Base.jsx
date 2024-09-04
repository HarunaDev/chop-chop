import { Link } from "react-router-dom";
import Img from "../assets/banner-center.png";
import "../styles/Base.css"; // Import custom CSS

function Base(prop) {
    const bases = ['Rice', 'Spaghetti', 'Beans'];

    return (
        <section className="py-32 px-64 bg-gray-100 rounded-lg shadow-lg flex justify-between items-center">
            <div className="w-1/2 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold mb-6">Select A base for this order</h1>

                <ul className="space-y-4">
                    {bases.map(base => {
                        let spanClass = prop.food.base === base 
                            ? 'active-item font-bold text-black' 
                            : 'text-gray-700';
                        return (
                            <li key={base} 
                                onClick={() => prop.addBase(base)} 
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                            >
                                <span className={spanClass}>{base}</span>
                            </li>
                        );
                    })}
                </ul>

                {prop.food.base && (
                    <Link to="/next-step">
                        <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                            Next
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

export default Base;
