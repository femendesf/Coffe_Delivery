import { Home } from "../Home/Home"
import { AddresForm } from "./components/AddresForm"
import { CartCoffees } from "./components/CartCoffees"
import { Payment } from "./components/Payment"

export function CartIndex(){
   return(
       <div className="flex mt-[160px] gap-8 justify-center">
            <div>
                <h1>Complete seu pedido</h1>
                <AddresForm/>
                <Payment/>
            </div>
            
            <div>
                <h1>Cafés selecionados</h1>
                <CartCoffees/>
            </div>
           
           
       </div>
   )
}