import { useContext, useEffect } from "react"
import { CardsContext } from "../../../context/CardsContext"

import { ListCoffees } from "./ListCoffes"


export function CartCoffees(){

    const {listCoffees, quantity} = useContext(CardsContext)

    const totCart = quantity * 9.90

    return(

        <main >
           {
            listCoffees.map(({idCoffee, imgCoffee, titleCoffee, newQuantity}) => {
                return(

                    <ListCoffees
                        img={imgCoffee}
                        title={titleCoffee}
                        value={newQuantity}
                        id={idCoffee}
                    />
                )
            })
           }

            <div className="flex justify-between mt-6 text-sm">
                <h3>Total de itens</h3>
                <span>{totCart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>

            <div className="flex justify-between text-sm">
                <h3>Entrega</h3>
                <span>R$ 3,50</span>
            </div>

            <div className="flex justify-between text-xl font-bold">
                <h2>Total</h2>
                <span>{(totCart + 3.50).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>

            

        </main>
    )
}