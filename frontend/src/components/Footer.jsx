import { Link } from "react-router-dom";
import FooterImg from "../assets/Food-Big.png";
import FooterLogo from "../assets/choji-logo.png";
import { motion } from "framer-motion";

function Footer() {
    // Define animation variants
    const bounceVariant = {
        hidden: { y: -1000, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
            },
        },
    };

    return (
        <footer className="bg-[#2CCA50] px-32 pt-28 pb-16">
            <h1 className="mx-[auto] w-max text-6xl text-[#D42B31] bg-[#F8E44D] font-bold px-12 py-4 rounded">
                Order Now
            </h1>
            <motion.img
                className="mx-[auto] mt-10 w-[600px]"
                src={FooterImg}
                alt="Footer Image"
                variants={bounceVariant}
                initial="hidden"
                animate="visible"
            />

            <div className="flex justify-between items-center mt-18">
                <img className="w-[100px]" src={FooterLogo} alt="Footer Logo" />
                <Link to="/order">
                    <button className="bg-[#D42B31] text-[#FFFFFF] text-lg px-4 py-2 rounded">
                        Order Now
                    </button>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
