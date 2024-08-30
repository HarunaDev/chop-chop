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
            className="flex justify-between items-center bg-[#EEEEEE] px-32 py-16"
        >
            <motion.div
                className="flex flex-col justify-between items-start"
                initial={{ x: -100, opacity: 0 }}
                animate={textControls}
            >
                <h1 className="mb-16 text-3xl text-[#282828] font-bold">
                    Order your favourite foods, <br /> locally prepared and delivered <br /> to your doorstep.
                </h1>

                <Link to="/order">
                    <button className="rounded bg-[#2CCA50] px-6 py-4 text-[#FFFFFF] font-semibold">
                        Order Now
                    </button>
                </Link>
            </motion.div>

            <motion.img
                src={ServiceImg}
                alt="Service Delivery"
                // className="w-1/3 h-auto object-contain"
                initial={{ x: 100, opacity: 0 }}
                animate={imageControls}
            />
        </section>
    );
}

export default Service;
