import { createContext, ReactNode, useEffect, useState } from "react";


interface CardsContextType{
    listCoffees:CardInfosProps[]
    quantity: number,
    setTot: (state: number) => void,
    createList: (titleCoffee : string, imgCoffee: string, id: string, newQuantity: number) => void,
    updateList: (id: string, newQuantity: number) => void
}

interface CardsContextProps{
    children: ReactNode
}

export interface CardInfosProps{
    idCoffee: string,
    titleCoffee: string,
    imgCoffee: string,
    newQuantity: number,
    info?: string,
    info_increment?: string,
    info_increment_2?: string,
}


export const CardsContext = createContext({} as CardsContextType)

export function CardsContextProvider({ children} : CardsContextProps) {

    const [quantity, setQuantity] = useState(0);
    const [listCoffees, setListCoffees] = useState<CardInfosProps[]>([])
    
    
    function setTot(state: number){
        setQuantity(tot => state + tot)
    }

    function createList(idCoffee: string, imgCoffee: string, titleCoffee: string, newQuantity: number){
       
        setListCoffees((state) => [
            ...state,
            {
            idCoffee: idCoffee,
            imgCoffee: imgCoffee,
            titleCoffee: titleCoffee,
            newQuantity: newQuantity
            },
        ]);

    }

    function updateList(id : string, quantity: number){

        const newList = listCoffees.map((item) => {
            if(id === item.idCoffee){
                const tot = item.newQuantity + quantity
                return{
                    ...item, newQuantity: tot
                }
            }
            return item
        })
        setListCoffees(newList)
    }
   
    console.log(listCoffees)

    return( 
        <CardsContext.Provider
        value={{
            quantity,
            setTot,
            listCoffees,
            createList,
            updateList
        }}
        >
            {children}
        </CardsContext.Provider>
    )
}