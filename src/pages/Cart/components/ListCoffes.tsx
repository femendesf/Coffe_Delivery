import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../../context/CardsContext";

import { InputNumber } from "../../Home/components/InputNumber";

interface ListCoffesProps{
    img: string,
    id : string,
    title: string,
    value: number
}

export function ListCoffees({img, title, value, id} : ListCoffesProps){

    const { updateValueCart, deleteCoffee } = useContext(CardsContext)

    function handleIncrease(){
       
        const newValue = value + 1
        updateValueCart(id, newValue)
    }

    function handleDecrease(){
    
        const newValue = value - 1
        updateValueCart(id, newValue)
    }

    function sendId(){
        deleteCoffee(id)
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
                                    className="text-xs flex items-center justify-center gap-1 bg-base-button rounded-md p-2"
                                    onClick={sendId}
                                    >
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