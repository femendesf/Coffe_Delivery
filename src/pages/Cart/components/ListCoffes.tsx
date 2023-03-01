import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../../context/CardsContext";

import { InputNumber } from "../../Home/components/InputNumber";

interface ListCoffesProps{
    img: string,
    title: string,
    value: number
}

export function ListCoffees({img, title, value} : ListCoffesProps){

    const [quantity, setQuantity] = useState(1)
    const {listCoffees } = useContext(CardsContext)

    function handleIncrease(){
        setQuantity(state => state + 1)
    }

    function handleDecrease(){
        setQuantity(state => state - 1)
    }

    
    const tot = value * 9.90

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
                                    quantity={value}
                                />
                                <button 
                                    className="text-xs flex items-center justify-center gap-1 bg-base-button rounded-md p-2">
                                    <Trash size={16} className="text-purple"/> 
                                    REMOVER
                                </button>
                            </div>
                        </div>

                </div>
                <span className="ml-auto text-base-text font-bold">{tot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

            </div>
    )
}