import { Header } from "./Header";
import { Outlet } from 'react-router-dom'

export function DefaultLayout(){
    
    return(
        <div className="flex flex-col">
            <Header/>
            <Outlet/>
        </div>
    )
}