import { Link } from "react-router-dom"
import ServiceImg from "../assets/choji-delivery.png"

function Service(){
    return (
        <section className="flex justify-between items-center bg-[#EEEEEE] p-16">
            <div >
                <h1>Order your favourite foods, <br /> locally prepared and delivered <br /> to your doorstep.</h1>

                <Link to="/order">
                    <button>Order Now</button>
                </Link>
            </div>

            <div>
                <img src={ServiceImg} alt="" />
            </div>
        </section>
    )
}

export default Service