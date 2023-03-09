import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface InputNumberProps{
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
   
    
}
export function InputNumber({quantity, onIncrease, onDecrease, } : InputNumberProps){
    
    let numberIsNegative = false

    if(quantity > 1){
        numberIsNegative
    }else{
        numberIsNegative = true
    }
    
    return(
        
        <div className="w-[72px] h-[38px] bg-base-button rounded-md mr-2 flex justify-center items-center ">
            
            <button 
                id="minus" 
                onClick={onDecrease} 
                disabled={numberIsNegative} 
                className='text-purple disabled:text-purple hover:text-purple-dark'
            >
                <Minus weight="bold" />
            </button>

            <input id="inputValue" className="w-6 bg-base-button  text-center" value={quantity}/>

            <button 
                onClick={onIncrease}  
                className="text-purple hover:text-purple-dark"
            >
                <Plus  weight="bold" />
            </button>

        </div>
    )
}