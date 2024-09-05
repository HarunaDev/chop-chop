import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import api from "../api";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Base from "../components/Base";
import Sides from "../components/Sides";
import Toppings from "../components/Toppings"; // Import the Toppings component

function Order() {
    // State to hold user
    const [user, setUser] = useState(null);
    const [showBase, setShowBase] = useState(false); // State to toggle between Banner and Base
    const [showSides, setShowSides] = useState(false); // State to toggle between Sides and Toppings
    const [showToppings, setShowToppings] = useState(false); // State to toggle between Sides and Toppings

    // State to track user order
    const [food, setFood] = useState({ base: "", sides: [], toppings: [] });

    // Function to add base selection
    const addBase = (base) => {
        setFood({ ...food, base });
    };

    // Function to proceed to Sides after Base is selected
    const proceedToSides = () => {
        setShowSides(true);
        setShowBase(false); // Hide the Base view
    };

    // Function to proceed to Toppings after Sides are selected
    const proceedToToppings = () => {
        setShowToppings(true);
        setShowSides(false); // Hide the Sides view
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

            {/* Step 1: Banner (First View) */}
            {!showBase && !showSides && !showToppings && (
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
                            onClick={() => setShowBase(true)} // Start order flow
                        >
                            Create your order
                        </motion.button>
                    }
                />
            )}

            {/* Step 2: Base Selection */}
            {showBase && !showSides && !showToppings && (
                <Base addBase={addBase} food={food} proceedToSides={proceedToSides} />
            )}

            {/* Step 3: Sides Selection */}
            {showSides && !showToppings && (
                <Sides food={food} setFood={setFood} proceedToToppings={proceedToToppings} />
            )}

            {/* Step 4: Toppings Selection */}
            {showToppings && (
                <Toppings food={food} setFood={setFood} />
            )}

            <Footer />
        </>
    );
}

export default Order;
