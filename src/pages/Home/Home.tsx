import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";

export function Home(){
    return(
        <div className="flex flex-col justify-center items-center">
            <Intro/>
            <OurCoffees/>
        </div>
    )
}