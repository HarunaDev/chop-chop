import { Link } from "react-router-dom";
import FooterImg from "../assets/Food-Big.png";
import FooterLogo from "../assets/choji-logo.png";

function Footer() {
    return (
        <footer className="bg-[#2CCA50] px-8 md:px-16 lg:px-32 pt-16 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-16">
            <h1 className="mx-auto text-4xl md:text-5xl lg:text-6xl text-[#D42B31] bg-[#F8E44D] font-bold px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-4 rounded text-center">
                Order Now
            </h1>
            <img className="mx-auto mt-8 md:mt-10 lg:mt-12 w-full md:w-[500px] lg:w-[600px] h-auto object-contain" src={FooterImg} alt="Footer" />

            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-12 md:mt-18">
                <div className="flex items-center space-x-6">
                    <img className="w-16 md:w-24 lg:w-32" src={FooterLogo} alt="Footer Logo" />
                    <Link to="/order">
                        <button className="bg-[#D42B31] text-[#FFFFFF] text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
