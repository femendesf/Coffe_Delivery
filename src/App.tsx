import './styles/main.css'
import './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {

  return (
      <div className='flex  mx-28 items-center justify-center'>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
          
      </div>
     
  )
}


