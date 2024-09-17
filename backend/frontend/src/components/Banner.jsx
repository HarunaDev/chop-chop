import { Link } from 'react-router-dom';
import BannerImg from "../assets/banner-center.png";
import FriesSpecial from "../assets/fries-special-combo.png";
import SmoothieBlend from "../assets/smoothie-blend.png";
import Yoghurt from "../assets/yoghurt.png";
import Food from "../assets/food.png";
import { motion } from "framer-motion";

function Banner(prop) {
    return (
        <>
            <section 
                id="banner" 
                className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[600px] px-6 md:px-16 py-8 md:py-16 bg-[#EEEEEE]"
            >
                {/* <!-- First Column --> */}
                <motion.div 
                    className="flex flex-col justify-around h-full w-full md:w-1/3 mb-6 md:mb-0"
                    initial={{ x: '-100vw' }} 
                    animate={{ x: 0 }} 
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <h2 className="text-xl md:text-3xl text-[#282828] font-bold text-center md:text-left">Mouthwatering gourmet creation, freshly prepared, bursting with flavor</h2>
                    <Link to={prop.orderUrl} className="flex justify-center md:justify-start">
                        <motion.button 
                            className="bg-[#D42B31] text-white py-2 px-4 rounded-md w-32 h-12 md:w-40 md:h-16 mt-4"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {prop.orderText}
                        </motion.button>
                    </Link>
                </motion.div>

                {prop.banner ? prop.banner :
                <motion.img  
                    className="w-2/3 md:w-1/3 h-auto object-contain mb-6 md:mb-0"
                    src={BannerImg} 
                    alt="choji-shop-order" 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />}

                {/* <!-- Second Column --> */}
                <motion.div 
                    className="flex flex-col justify-around h-full items-center md:items-end w-full md:w-1/3"
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <div className="flex space-x-4 justify-center md:justify-end mb-4 md:mb-0">
                        <motion.img 
                            className="w-16 h-16 md:w-20 md:h-20 object-contain border-2 border-[#2CCA50] rounded-full" 
                            src={SmoothieBlend} 
                            alt="choji-shop-smoothie"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        />
                        <motion.img 
                            className="w-16 h-16 md:w-20 md:h-20 object-contain border-2 border-[#ECD313] rounded-full" 
                            src={FriesSpecial} 
                            alt="choji-shop-fries-special"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        />
                        <motion.img 
                            className="w-16 h-16 md:w-20 md:h-20 object-contain border-2 border-[#D42B31] rounded-full" 
                            src={Yoghurt} 
                            alt="choji-shop-yoghurt"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        />
                    </div>
                    <motion.img 
                        className="w-20 md:w-32 h-auto object-contain mt-4"
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
