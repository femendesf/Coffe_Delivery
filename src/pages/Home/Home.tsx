import { useEffect } from "react";
import { Header } from "../../layouts/Header";
import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";

export function Home(){
    
    useEffect(() => {}, [])

    return(
        <div>
            <Intro/>
            <OurCoffees/>
        </div>
    )
}