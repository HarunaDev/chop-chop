function MenuCard(prop) {
    return (
        <div className="flex justify-between item-center {} border-2 border-[blue] mb-16 h-[200px]">
            <div className="border-2 border-[green] w-2/3 mr-24 px-16 py-8">
                <h3 className="mb-16">Order Our Special Combo</h3>
                <h1>{prop.detail}</h1>
            </div>

            <div className="w-1/6 border-2 border-[pink] bg-[#D42B31] flex justify-center item-center py-8">
                <img className="mx-auto w-[150px] h-[150px]" src={prop.img} alt="img" />
            </div>
        </div>
    )
}

export default MenuCard