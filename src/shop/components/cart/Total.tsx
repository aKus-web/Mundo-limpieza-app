export const Total = () => {
    return (
        <div className="max-w-[520px] mt-12 mx-auto flex flex-col gap-4">
            <div className="flex justify-between  border-b pb-2">
                <h2 className="text-primary text-[20px] font-text">Subtotal</h2>

                <div className="flex gap-2 items-center">
                    <span className="text-primary texttext-primary text-[22px] font-bold">$500</span>
                    <span className="text-primary texttext-primary text-[15px]">UY</span>
                </div>
            </div>

            <div className="flex justify-between  border-b pb-2">
                <h2 className="text-primary text-[20px] font-text">Envío</h2>

                <div className="flex gap-2 items-center">
                    <span className="text-primary texttext-primary text-[22px] font-bold">$50</span>
                    <span className="text-primary texttext-primary text-[15px]">UY</span>
                </div>
            </div>

            <div className="flex justify-between">
                <h2 className="text-primary text-[20px] font-title font-bold">Total</h2>

                <div className="flex gap-2 items-center">
                    <span className="text-primary texttext-primary text-[22px] font-bold">$550</span>
                    <span className="text-primary texttext-primary text-[15px]">UY</span>
                </div>
            </div>

            <button className="mt-4 font-title p-2 text-[20px] bg-gradient-to-r from-[#FA9630] to-[#FF6042] text-white rounded-[8px]">Comprar</button>
        </div>
    )
}
