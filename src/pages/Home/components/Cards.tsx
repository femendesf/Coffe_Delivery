import { ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../../context/CardsContext";
import { InputNumber } from "./InputNumber"

interface CardProsp{
    idCard: string,
    src : string,
    info: string,
    info_increment?: string,
    info_increment_2?: string,
    title_coffee: string,
    text_coffee: string,
}


export function Cards({src, info, info_increment, title_coffee, text_coffee, info_increment_2, idCard} : CardProsp){
    

    const {setTot, setInfo} = useContext(CardsContext)

    const [newQuantity, setNewQuantity] = useState(1)
    

    function handleIncrease(){
        setNewQuantity(state => state + 1)
       
    }

    function handleDecrease(){
        setNewQuantity(state => state - 1)
        
    }

  
    function addToQuantity(){
        setTot(newQuantity)
        setInfo(idCard, src, title_coffee, newQuantity) 
       
    }

    return(
        <div 
                className='flex flex-col justify-center items-center w-64 h-[310px] bg-base-card mb-9 rounded-card ' 
                id='cards'
                key={idCard}
            >
            
                <img 
                    src={src}
                    alt=""
                    className="mt-[-50px] rounded-full shadow-2xl"
                />
                
                <div className="flex gap-1">
                    <span 
                    className="p-2 h-5 text-[10px] text-yellow-dark font-bold font-Roboto bg-yellow-light rounded-full flex items-center justify-center mt-3"
                    >
                        {info.toUpperCase()}
                    </span>

                    {info_increment ? 
                        <span 
                            className="p-2 h-5 text-[10px] text-yellow-dark font-bold font-Roboto bg-yellow-light rounded-full flex items-center justify-center mt-3"
                        >
                            {info_increment.toUpperCase()}
                        </span> : ''
                    } 

                    {info_increment_2 ? 
                        <span 
                            className="p-2 h-5 text-[10px] text-yellow-dark font-bold font-Roboto bg-yellow-light rounded-full flex items-center justify-center mt-3"
                        >
                            {info_increment_2.toUpperCase()}
                        </span> : ''
                    } 
                </div>
                
                <h1 
                    className="text-xl mt-4 mb-2"
                >
                        {title_coffee}
                </h1>

                <p 
                    className="w-[216px] h-8 text-center text-sm text-base-label">
                        {text_coffee}
                </p>

                <div className="flex mt-[33px] items-center justify-between  text-base-text">
                    <span className="text-sm mr-1 mt-1">
                        R$
                    </span>
                    <h1 className="text-2xl mr-[23px]">
                        9,90
                    </h1>
                    
                    <InputNumber
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={newQuantity}
                    />

                    <button 
                        onClick={addToQuantity}
                        className="bg-purple-dark hover:bg-purple w-9 h-9 rounded-md flex items-center justify-center"> 
                        <ShoppingCart size={22} color='#F3F2F2' weight="fill"/> 
                    </button>
                    
                </div>

            </div>
    )
}