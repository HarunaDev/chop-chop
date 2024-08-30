import { Link } from 'react-router-dom';
import BannerImg from "../assets/banner-center.png";
import FriesSpecial from "../assets/fries-special-combo.png";
import SmoothieBlend from "../assets/smoothie-blend.png";
import Yoghurt from "../assets/yoghurt.png";
import Food from "../assets/food.png";
import { motion } from "framer-motion";

function Banner() {
    return (
        <>
            <section id="banner" className="flex justify-between items-center h-[600px] px-16 bg-[#EEEEEE]">
                {/* <!-- First Column --> */}
                <motion.div 
                    className="flex flex-col justify-around h-full w-1/3"
                    initial={{ x: '-100vw' }} 
                    animate={{ x: 0 }} 
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <h2 className="text-3xl text-[#282828] font-bold">Mouthwatering gourmet creation, freshly prepared, bursting with flavor</h2>
                    <Link to="/order">
                        <motion.button 
                            className="bg-[#D42B31] text-white py-2 px-4 rounded-md w-40 h-16"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Order Now
                        </motion.button>
                    </Link>
                </motion.div>

                {/* <!-- Center Image --> */}
                <motion.img  
                    className="center w-1/3 h-auto object-contain mx-auto mx-8"
                    src={BannerImg} 
                    alt="choji-shop-order" 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* <!-- Second Column --> */}
                <motion.div 
                    className="flex flex-col justify-around h-full items-end w-1/3"
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <div className="flex space-x-4">
                        <motion.img 
                            className="w-20 h-20 object-contain border-2 border-[#2CCA50] rounded-full" 
                            src={SmoothieBlend} 
                            alt="choji-shop-smoothie"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        />
                        <motion.img 
                            className="w-20 h-20 object-contain border-2 border-[#ECD313] rounded-full" 
                            src={FriesSpecial} 
                            alt="choji-shop-fries-special"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        />
                        <motion.img 
                            className="w-20 h-20 object-contain border-2 border-[#D42B31] rounded-full" 
                            src={Yoghurt} 
                            alt="choji-shop-yoghurt"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        />
                    </div>
                    <motion.img 
                        className="w-25 h-auto object-contain mt-4 center" 
                        src={Food} 
                        alt="choji-shop-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                </motion.div>
            </section>
        </>
    )
}

export default Banner;
