import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import api from "../api";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Base from "../components/Base";
import Sides from "../components/Sides"; // Import the Sides component
import "../styles/Base.css";

function Order() {
    // State to hold user
    const [user, setUser] = useState(null);
    const [showBase, setShowBase] = useState(false); // State to toggle between Banner and Base
    const [showSides, setShowSides] = useState(false); // State to toggle between Base and Sides

    // State to track user order
    const [food, setFood] = useState({ base: "", sides: [], toppings: [] });

    // Function to add base selection
    const addBase = (base) => {
        setFood({ ...food, base });
    };

    // Function to proceed to Sides after selecting a base
    const proceedToSides = () => {
        setShowSides(true);
    };

    useEffect(() => {
        getUser();
    }, []);

    // Function to make API call and get user
    const getUser = () => {
        api
            .get("/api/user/")
            .then((res) => res.data)
            .then((data) => {
                setUser(data.username);
            })
            .catch((err) => alert(err));
    };

    return (
        <>
            <NavBar user={user} url="/" text="Home" />
            {!showBase ? (
                <Banner
                    orderUrl="#Menu"
                    orderText="Go to Menu"
                    banner={
                        <motion.button
                            className="mx-auto border-4 border-[green] p-8 rounded text-4xl font-bold text-[green]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowBase(true)} // Update state on click
                        >
                            Create your order
                        </motion.button>
                    }
                />
            ) : !showSides ? (
                <Base addBase={addBase} food={food} proceedToSides={proceedToSides} /> // Pass proceedToSides to Base
            ) : (
                <Sides food={food} setFood={setFood} /> // Render Sides component when showSides is true
            )}
            <Footer />
        </>
    );
}

export default Order;
