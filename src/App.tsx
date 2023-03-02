import './styles/main.css'
import './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CardsContextProvider } from './context/CardsContext'
import { useEffect } from 'react'

export function App() {
  
  return (
      <>
        <BrowserRouter>
          <CardsContextProvider> 
            <Router/>
          </CardsContextProvider>
        </BrowserRouter>
      </>
     
  )
}


