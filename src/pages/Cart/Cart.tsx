
import { useContext } from "react"
import { CardsContext } from "../../context/CardsContext"
import { AddressForm } from "./components/AddressForm"
import { CartCoffees } from "./components/CartCoffees"
import { Payment } from "./components/Payment"

export function CartIndex(){

    //const {quantity} = useContext(CardsContext)
   
    return(
        <div className="flex mt-28 gap-8 justify-center ">
           
                <div>
                    <h1 className="text-lg">Complete seu pedido</h1>
                    <AddressForm/>
                    <Payment/>
                </div>
                
                <div>
                    <h1 className="text-lg">Cafés selecionados</h1>
                    <CartCoffees/>
                </div>

        </div>
    )
}