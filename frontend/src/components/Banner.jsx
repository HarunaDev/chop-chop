import { Link } from 'react-router-dom'
import BannerImg from "../assets/banner-center.png"
import FriesSpecial from "../assets/fries-special-combo.png"
import SmoothieBlend from "../assets/smoothie-blend.png"
import Yoghurt from "../assets/yoghurt.png"
import Food from "../assets/food.png"

function Banner() {
    return (
        <>
            <section id="banner" className="flex justify-between items-center h-[600px] px-16 bg-[#EEEEEE]">
                {/* <!-- First Column --> */}
                <div className="flex flex-col justify-around h-full w-1/3">
                    <h2 className="text-3xl text-[#282828] font-bold">Mouthwatering gourmet creation, freshly prepared, bursting with flavor</h2>
                    <Link to="/order">
                        <button className="bg-[#ECD313] text-white py-2 px-4 rounded-md w-40 h-16">Order Now</button>
                    </Link>
                </div>

                {/* <!-- Center Image --> */}
                <img className="center w-1/3 h-auto object-contain mx-auto mx-8" src={BannerImg} alt="choji-shop-order" />

                {/* <!-- Second Column --> */}
                <div className="flex flex-col justify-around h-full items-end w-1/3">
                    <div className="flex space-x-4">
                    <img className="w-20 h-20 object-contain border-2 border-[#2CCA50] rounded-full" src={SmoothieBlend} alt="choji-shop-smoothie" />
                    <img className="w-20 h-20 object-contain border-2 border-[#ECD313] rounded-full" src={FriesSpecial} alt="choji-shop-fries-special" />
                    <img className="w-20 h-20 object-contain border-2 border-[#D42B31] rounded-full" src={Yoghurt} alt="choji-shop-yoghurt" />
                    </div>
                    <img className="w-25 h-auto object-contain mt-4 center" src={Food} alt="choji-shop-menu" />
                </div>

            </section>
        </>
    )
}

export default Banner