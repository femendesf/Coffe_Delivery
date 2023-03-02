import { createContext, ReactNode, useEffect, useReducer, useState } from "react";


interface CardsContextType{
    listCoffees:CardInfosProps[]
    quantity: number,
    setTot: (state: number) => void,
    createList: (titleCoffee : string, imgCoffee: string, id: string, newQuantity: number) => void,
    updateList: (id: string, newQuantity: number) => void,
    updateValueToUp: (id : string) => void,
    updateValueToDown: (id : string) => void,
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

    const [listCoffees, dispatch] = useReducer((state: CardInfosProps[], action: any) => {

        if(action.type === 'CREATE_LIST_COFFEES'){
            return [...state, action.payload.data]
        }

        if(action.type === 'UPDATE_LIST_COFFEES_NEW_QUANTITY'){
            
            const newList = state.map((item) => {
                if(action.payload.id === item.idCoffee){
                    const tot = item.newQuantity + action.payload.quantity
                    return{
                        ...item, newQuantity: tot
                    }
                }
                return item
            })
            
            return newList
        }

        /*if(action.type === 'UPDATE_VALUE_TO_UP'){

           const newValueUp = state.map((item) => {
            if(item.idCoffee === action.payload.id){

                const up = action.payload.quantity + 1

                return{
                    ...item, newQuantity: up
                }
            }
           })

           return newValueUp
        }

       /* if(action.type === 'UPDATE_VALUE_TO_DOWN'){
           const newValueDown = state.map((item) => {
            if(item.idCoffee === action.payload.id){
                const down = item.newQuantity - 1
                return{
                    ...item, newQuantity:down
                }
            }
           })
           return newValueDown
        }*/

        return state
    } , [])
    
     
    function setTot(state: number){
        setQuantity(tot => state + tot)
    }

    function createList(idCoffee: string, imgCoffee: string, titleCoffee: string, newQuantity: number){

        dispatch({
            type: 'CREATE_LIST_COFFEES',
            payload:{
                data: {
                    idCoffee: idCoffee,
                    imgCoffee: imgCoffee,
                    titleCoffee: titleCoffee,
                    newQuantity: newQuantity
                    },
            }
        })
    }

    function updateList(id : string, quantity: number){

        dispatch({
            type: 'UPDATE_LIST_COFFEES_NEW_QUANTITY',
            payload:{
                quantity: quantity,
                id: id
            }
        })


        dispatch({
            type: 'UPDATE_VALUE_TO_UP',
            payload:{
                quantity: quantity,
                id: id
            }
       })

    }

    function updateValueToUp(id : string){
        
        dispatch({
            type: 'UPDATE_VALUE_TO_UP',
            payload:{
                id: id
            }
       })
    }

    function updateValueToDown(id : string){

        dispatch({
            type: 'UPDATE_VALUE_TO_DOWN',
            payload:{
                id: id
            }
       })
    }


 
    console.log(listCoffees)

    return( 
        <CardsContext.Provider
        value={{
            quantity,
            setTot,
            listCoffees,
            createList,
            updateList,
            updateValueToUp,
            updateValueToDown
        }}
        >
            {children}
        </CardsContext.Provider>
    )
}