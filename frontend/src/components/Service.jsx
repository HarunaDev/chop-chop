import { Link } from "react-router-dom"
import ServiceImg from "../assets/choji-delivery.png"

function Service(){
    return (
        <section className="flex justify-between items-center bg-[#EEEEEE] px-32 py-16">
            <div className="flex flex-col justify-between items-start" >
                <h1 className="mb-16 text-3xl text-[#282828] font-bold">Order your favourite foods, <br /> locally prepared and delivered <br /> to your doorstep.</h1>

                <Link to="/order">
                    <button className="rounded bg-[#2CCA50] px-6 py-4 text-[#FFFFFF] font-semibold">Order Now</button>
                </Link>
            </div>

            
            <img src={ServiceImg} alt="" />
            
        </section>
    )
}

export default Service