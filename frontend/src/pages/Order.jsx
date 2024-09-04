import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import api from "../api";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Base from "../components/Base"; // Import the Base component

function Order() {
    // State to hold user
    const [user, setUser] = useState(null);
    const [showBase, setShowBase] = useState(false); // State to toggle between Banner and Base

    // state to track user order
    const [food, setFood] = useState({ base: "", sides: [], toppings: []})

    // function to add base selcection
    const addBase = (base) => {
        setFood({ ...food, base})
    }

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
            ) : (
                <Base addBase={addBase} food={food} /> // Render Base component when showBase is true
            )}
            <Footer />
        </>
    );
}

export default Order;
