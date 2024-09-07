function MenuCard(prop) {
    return (
        <div className={`flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 h-auto md:h-[200px] ${prop.style}`}>
            <div className={`bg-[#2CCA50] w-full md:w-2/3 px-8 py-6 md:px-16 md:py-10 shrink ${prop.text} ${prop.roundedR} ${prop.roundedL}`}>
                <h3 className={`mb-4 md:mb-10 text-[#ffffff] text-sm md:text-[18px] font-semibold w-full md:w-[250px] bg-[#ECD313] text-center rounded p-2 ${prop.marginL}`}>
                    Order Our Special Combo
                </h3>
                <h1 className="text-[#ffffff] text-lg md:text-2xl font-bold">
                    {prop.detail}
                </h1>
            </div>

            <div className={`w-full md:w-1/6 bg-[#D42B31] flex justify-center items-center py-6 md:py-8 ${prop.margin} ${prop.roundedR2} ${prop.roundedL2}`}>
                <img className="mx-auto w-[100px] h-[100px] md:w-[150px] md:h-[150px]" src={prop.img} alt="img" />
            </div>
        </div>
    );
}

export default MenuCard;
