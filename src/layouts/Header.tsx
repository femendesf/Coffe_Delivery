import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

export function Header(){

  const {quantity} = useContext(CardsContext)

    return(
        <header className='flex items-center justify-between bg-background border-b-2 w-full fixed rounded-xl px-10'>

          <img src="src\assets\logo.svg" alt="logo_coffe" className='w-20 h-10 my-8'/>
          
          <div className='flex gap-3 my-8 items-center h-9'>

            <div 
              className="flex items-center justify-center gap-1 h-[38px] px-2 rounded-md  bg-purple-light text-purple-dark"
              >
                <MapPin size={22} weight="fill"/>
                <h2 className="">Curitiba, PR</h2>
            </div>
            
            <button className='bg-yellow-light text-yellow-dark flex items-center w-9 h-9 rounded  p-2 '> 
              <ShoppingCart size={22} weight='fill'/> 
            </button>

            <span 
              className="w-5 h-5 p-2 flex items-center justify-center bg-yellow-dark rounded-full text-xs text-white font-bold mb-8 ml-[-22px]" 
            >
              {quantity}
            </span>
            
          </div>

      </header>

     
      
    )
}