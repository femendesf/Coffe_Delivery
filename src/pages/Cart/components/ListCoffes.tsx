import { Trash } from "phosphor-react";
import { useState } from "react";

import { InputNumber } from "../../Home/components/InputNumber";

interface ListCoffesProps{
    img: string,
    title: string
}

export function ListCoffees({img, title} : ListCoffesProps){

    const [quantity, setQuantity] = useState(1)

    function handleIncrease(){
        setQuantity(state => state + 1)
    }

    function handleDecrease(){
        setQuantity(state => state - 1)
    }

    return(
        <div className="flex mb-6 pb-6 border-b">
                <div className="flex gap-5 mb-3">
                    <img src={img} alt="" className="w-16 rounded-full shadow-2xl" />
                        <div>
                            <h2 className="mb-2">{title}</h2>
                            <div className="flex grid grid-cols-2">
                                <InputNumber
                                    onDecrease={handleDecrease}
                                    onIncrease={handleIncrease}
                                    quantity={quantity}
                                />
                                <button 
                                    className="text-xs flex items-center justify-center gap-1 bg-base-button rounded-md p-2">
                                    <Trash size={16} className="text-purple"/> 
                                    REMOVER
                                </button>
                            </div>
                        </div>

                </div>
                <span className="ml-auto">R$ 9,90</span>
            </div>
    )
}