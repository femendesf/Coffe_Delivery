import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

import { AddressDataSchema } from "../pages/Cart/Cart";

interface CardsContextType{
    listCoffees:CardInfosProps[],
    quantity: number,
    createList: (titleCoffee : string, imgCoffee: string, id: string, newQuantity: number) => void,
    updateList: (id: string, newQuantity: number) => void,
    updateValueCart: (id : string, value: number) => void,
    deleteCoffee: (id: string) => void,
    createAddressForm: (data: AddressDataSchema) => void,
    
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

        if(action.type === 'UPDATE_VALUE_COFFEE_CART'){

            const newList = state.map((item) => {
                if(action.payload.id === item.idCoffee){
                    return{
                        ...item, newQuantity: action.payload.value
                    }
                }
                return item
            })

            return newList
          
        }

        if(action.type === 'DELETE_COFFEE'){

            const newList = state.filter(item => {
                return(
                    item.idCoffee != action.payload.id
                )
            })

            return newList
        }

        return state
    } , [])
    
    const [address, setAddress] = useState<AddressDataSchema>()

    function createAddressForm(data: AddressDataSchema){
        
        setAddress({
            cep: data.cep,
            city: data.city,
            district: data.district,
            numberHouse: data.numberHouse,
            street: data.street,
            uf: data.uf
        })
    }

    useEffect(() => {

        var tot = 0
        listCoffees.map((item) => {
            tot += item.newQuantity
        })

        setQuantity(tot)
    
    }, [listCoffees])

    
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
                quantity,
                id
            }
        })
    }

    function updateValueCart(id : string, value: number){
        
        dispatch({
            type: 'UPDATE_VALUE_COFFEE_CART',
            payload:{
                id,
                value
            }
       })
    }

    function deleteCoffee(id: string){

        dispatch({
            type: 'DELETE_COFFEE',
            payload: {
                id
            }
        })
    }

    console.log(address)

    return( 
        <CardsContext.Provider
        value={{
            quantity,
            listCoffees,
            createList,
            updateList,
            updateValueCart,
            deleteCoffee,
            createAddressForm,
           
        }}
        >
            {children}
        </CardsContext.Provider >
    )
}