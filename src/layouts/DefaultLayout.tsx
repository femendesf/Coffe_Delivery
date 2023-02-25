import { Header } from "./Header";
import { Outlet } from 'react-router-dom'

export function DefaultLayout(){
    
    return(
        <div className="flex flex-col items-center justify-center">
            <Header/>
            <Outlet/>
        </div>
    )
}