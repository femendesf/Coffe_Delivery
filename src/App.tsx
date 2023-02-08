import { useState } from 'react'
import './styles/main.css'
import './App.tsx'
import { Home } from './pages/Home'
import { MapPin, ShoppingCart } from 'phosphor-react'


export function App() {

  return (
      <div className='flex flex-col mx-40 '>

          <header className='flex justify-between items-center w-full'>

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
            </div>

          </header>

          <Home/>
      </div>
     
  )
}


