import { createContext, ReactNode, useState } from "react";

interface CardsContextType{
    quantity: number,
    setTot: (state: number) => void,
}

interface CardsContextProps{
    children: ReactNode
}

export const CardsContext = createContext({} as CardsContextType)

export function CardsContextProvider({ children} : CardsContextProps) {

    const [quantity, setQuantity] = useState(0);


    function setTot(state: number){
        setQuantity(tot => state + tot)
        console.log(quantity)
    }

    console.log(quantity)
    return(
        <CardsContext.Provider
        value={{
            quantity,
            setTot
        }}
        >
            {children}
        </CardsContext.Provider>
    )
}