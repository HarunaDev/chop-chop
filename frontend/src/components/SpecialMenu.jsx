import MenuCard from "./MenuCard"
import BurgerSmoothie from "../assets/burger&smoothie.png"
import FriesSpecial from "../assets/fries-special-combo.png"
import FriesChickenSmoothie from "../assets/fries-chicken-smoothie.png"

function SpecialMenu() {
    return (
        <section id="special-section" className="h-auto py-20 px-16 bg-[#F8E44D]">
            <h1 className="text-center w-[400px] mx-auto text-4xl text-[#282828] font-bold mb-16">Checkout our Special Combo Menu</h1>

            <MenuCard detail="3pcs Chicken & Fries" img={FriesSpecial} roundedR="rounded-r" roundedL2="rounded-l" />
            <MenuCard detail="1pc Big Burger & Smoothie" img={BurgerSmoothie} style="flex-row-reverse" margin="mr-auto" text="text-end" marginL="ml-auto" roundedL="rounded-l" roundedR2="rounded-r"/>
            <MenuCard detail="6pcs Chicken & Fries with Smoothie" img={FriesChickenSmoothie} roundedR="rounded-r" roundedL2="rounded-l"/>
        </section>
    )
}

export default SpecialMenu