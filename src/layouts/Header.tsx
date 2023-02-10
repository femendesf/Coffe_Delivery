import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return(
        <header className='flex items-center justify-between bg-background fixed w-[1120px] border-b-2 rounded-xl'>

          <img src="src\assets\logo.svg" alt="logo_coffe" className='w-20 h-10 my-8'/>
          
          <div className='flex gap-3 my-8 items-center w-36 h-9 mr-6'>
            <h2 
              className='bg-purple-light text-purple-dark flex items-center p-2 w-36 h-9 gap-1 justify-center rounded'>
                <MapPin size={22} weight="duotone" color='#4B2995'/>
                Curitiba,PR
            </h2>

            
            <button className='bg-yellow-light text-yellow-dark flex items-center w-9 h-9 rounded  p-2 '> 
              <ShoppingCart size={22} weight='duotone'/> 
            </button>

            <span 
              className="w-5 h-5 p-2 flex items-center justify-center bg-yellow-dark rounded-full text-xs text-white font-bold mb-8 ml-[-22px]" 
            >
              3
            </span>
            
          </div>

      </header>

     
      
    )
}