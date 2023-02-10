import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";

export function Home(){
    return(
        <div className="flex flex-col ">
            <Intro/>
            <OurCoffees/>
        </div>
    )
}