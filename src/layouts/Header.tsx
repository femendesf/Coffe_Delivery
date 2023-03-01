import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

import { NavLink } from "react-router-dom";

export function Header(){

  const {quantity, listCoffees} = useContext(CardsContext)

  let listFull = false
    return(
        <div className="flex items-center justify-center mt-12">

          <nav className='flex items-center justify-between bg-background fixed w-full max-w-[1250px] border-b-2 rounded-xl px-10'>

            <NavLink
              to="/"
            >
               <img src="src\assets\logo.svg" alt="logo_coffe" className='w-20 h-10 my-8'/>
            </NavLink>

            <div className='flex gap-3 my-8 items-center h-9'>

              <div 
                className="flex items-center justify-center gap-1 h-[38px] px-2 rounded-md  bg-purple-light text-purple-dark"
                >
                  <MapPin size={22} weight="fill"/>
                  <h2 >Curitiba, PR</h2>
              </div>

              <NavLink to='/cart'>
                
                <button disabled={true} className='bg-yellow-light text-yellow-dark flex items-center w-9 h-9 rounded p-2 hover:bg-yellow-hover'> 
                  <ShoppingCart size={22} weight='fill'/> 
                </button>
              </NavLink>

              <span 
                className="w-5 h-5 p-2 flex items-center justify-center bg-yellow-dark rounded-full text-xs text-white font-bold mb-8 ml-[-22px]" 
              >
                {quantity}
              </span>
              
            </div>
          </nav>

      </div>

     
      
    )
}