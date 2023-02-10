import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface InputNumberProps{
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}
export function InputNumber({quantity, onIncrease, onDecrease} : InputNumberProps){
    
    let numberIsNegative = false

    if(quantity > 1){
        numberIsNegative
    }else{
        numberIsNegative = true
    }
    return(
        <div className="w-[72px] h-[38px] bg-base-button rounded-md mr-2 flex justify-center items-center ">

            <button onClick={onDecrease} disabled={numberIsNegative}><Minus className="text-purple" weight="bold" /></button>
            <input type="number" name="" id="" className="w-6 bg-base-button  text-center" value={quantity}/>
            <button onClick={onIncrease}  ><Plus className="text-purple" weight="bold" /></button>

        </div>
    )
}