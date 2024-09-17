import { Link } from "react-router-dom";
import ServiceImg from "../assets/choji-delivery.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Service() {
    // Animations
    const textControls = useAnimation();
    const imageControls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            textControls.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
            imageControls.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
        }
    }, [inView, textControls, imageControls]);

    return (
        <section
            ref={ref}
            className="flex flex-col md:flex-row justify-between items-center bg-[#EEEEEE] px-8 md:px-32 py-16"
        >
            <motion.div
                className="flex flex-col justify-center items-center md:items-start mb-8 md:mb-0 text-center md:text-left"
                initial={{ x: -100, opacity: 0 }}
                animate={textControls}
            >
                <h1 className="mb-8 md:mb-16 text-2xl md:text-3xl text-[#282828] font-bold">
                    Order your favourite foods, <br className="hidden md:block"/> locally prepared and delivered <br className="hidden md:block"/> to your doorstep.
                </h1>

                <Link to="/order">
                    <button className="rounded bg-[#2CCA50] px-6 py-3 md:py-4 text-[#FFFFFF] font-semibold">
                        Order Now
                    </button>
                </Link>
            </motion.div>

            <motion.img
                src={ServiceImg}
                alt="Service Delivery"
                className="w-2/3 md:w-1/3 h-auto object-contain"
                initial={{ x: 100, opacity: 0 }}
                animate={imageControls}
            />
        </section>
    );
}

export default Service;
