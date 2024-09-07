/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MenuCard from "./MenuCard";
import BurgerSmoothie from "../assets/burger&smoothie.png";
import FriesSpecial from "../assets/fries-special-combo.png";
import FriesChickenSmoothie from "../assets/fries-chicken-smoothie.png";
import { useEffect } from "react";

function SpecialMenu() {
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    // Animating the heading
    const headingControls = useAnimation();
    const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (headingInView) {
            headingControls.start("visible");
        }
    }, [headingControls, headingInView]);

    // Animated MenuCard Component
    const AnimatedMenuCard = ({ detail, img, ...props }) => {
        const controls = useAnimation();
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);

        return (
            <motion.div
                ref={ref}
                variants={fadeInVariant}
                initial="hidden"
                animate={controls}
                className="mb-12"
            >
                <MenuCard detail={detail} img={img} {...props} />
            </motion.div>
        );
    };

    return (
        <section id="special-section" className="h-auto py-12 px-6 md:py-20 md:px-16 bg-[#F8E44D]">
            <motion.h1
                ref={headingRef}
                initial="hidden"
                animate={headingControls}
                variants={fadeInVariant}
                className="text-center w-full md:w-[400px] mx-auto text-2xl md:text-4xl text-[#282828] font-bold mb-8 md:mb-16"
            >
                Checkout our Special Combo Menu
            </motion.h1>

            <AnimatedMenuCard 
                detail="3pcs Chicken & Fries" 
                img={FriesSpecial} 
                roundedR="md:rounded-r" 
                roundedL2="md:rounded-l" 
            />
            <AnimatedMenuCard
                detail="1pc Big Burger & Smoothie"
                img={BurgerSmoothie}
                style="md:flex-row-reverse"
                margin="md:mr-auto"
                text="md:text-end"
                marginL="md:ml-auto"
                roundedL="md:rounded-l"
                roundedR2="md:rounded-r"
            />
            <AnimatedMenuCard 
                detail="6pcs Chicken & Fries with Smoothie" 
                img={FriesChickenSmoothie} 
                roundedR="md:rounded-r" 
                roundedL2="md:rounded-l" 
            />
        </section>
    );
}

export default SpecialMenu;
