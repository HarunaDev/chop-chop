function MenuCard(prop) {
    return (
        <div className={`flex justify-between items-center mt-20 h-[200px] ${prop.style}`}>
            <div className={`bg-[#2CCA50] w-2/3 px-16 py-10 shrink ${prop.text} ${prop.roundedR} ${prop.roundedL}`}>
                <h3 className={`mb-10 text-[#ffffff] text-[18px] font-semibold w-[250px] bg-[#ECD313] text-center rounded p-2 ${prop.marginL}`}>Order Our Special Combo</h3>
                <h1 className="text-[#ffffffff] text-2xl font-bold">{prop.detail}</h1>
            </div>

            <div className={`w-1/6 bg-[#D42B31] flex justify-center items-center py-8 ${prop.margin} ${prop.roundedR2} ${prop.roundedL2}`}>
                <img className="mx-auto w-[150px] h-[150px]" src={prop.img} alt="img" />
            </div>
        </div>
    )
}

export default MenuCard