import { createContext, ReactNode, useEffect, useState } from "react";

interface CardsContextType{
    listCoffees:CardInfosProps[]
    quantity: number,
    setTot: (state: number) => void,
    setInfo: (titleCoffee : string, imgCoffee: string, id: string, newQuantity: number) => void,
}

interface CardsContextProps{
    children: ReactNode
}

interface CardInfosProps{
    idCoffee: string,
    titleCoffee: string,
    imgCoffee: string,
    newQuantity: number
}

export const CardsContext = createContext({} as CardsContextType)

export function CardsContextProvider({ children} : CardsContextProps) {

    const [quantity, setQuantity] = useState(0);
    const [listCoffees, setListCoffees] = useState<CardInfosProps[]>([])
    const [sumTotCard, setSumTotCard] = useState(0)

    function setTot(state: number){
        setQuantity(tot => state + tot)
        
    }

    function setInfo(id: string, imgCoffee: string, titleCoffee: string, newQuantity: number ){
        
        const exists = listCoffees.some((coffee) => coffee.idCoffee === id);

        // Se não existe, adiciona um novo objeto à lista
        if (!exists) {
            setSumTotCard(newQuantity)

            setListCoffees((state) => [
                ...state,
                {
                idCoffee: id,
                imgCoffee: imgCoffee,
                titleCoffee: titleCoffee,
                newQuantity: newQuantity
                },
            ]);

        }else{
            setSumTotCard(sumTotCard + newQuantity)
        
            const newList = listCoffees.map((item) => {
                if(item.idCoffee == id){
                    return{
                        ...item, newQuantity: sumTotCard
                    }
                }

                return item
            })
            
            setListCoffees(newList)
        }

    }

    console.log(sumTotCard)
    console.log(listCoffees)

    return( 
        <CardsContext.Provider
        value={{
            quantity,
            setTot,
            setInfo,
            listCoffees,
        }}
        >
            {children}
        </CardsContext.Provider>
    )
}