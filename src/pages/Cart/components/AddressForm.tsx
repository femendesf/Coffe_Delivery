import { MapPinLine } from "phosphor-react"

export function AddressForm(){
    return(
        <form className="flex flex-col bg-base-card p-10 mt-3 rounded-md">

            <div className="flex mb-8 gap-2 ">
                <MapPinLine size={22} className="text-yellow-dark"/>
                <div>
                    <h1 className="font-Roboto font-semibold">Endereço de Entrega</h1>
                    <p className="text-sm">Informe o endereço onde deseja receber seu pedido</p>
                </div>
                
            </div>
            

            <div className="flex flex-col gap-4" id="input_address">
                <input type="number" placeholder="CEP" className="w-52"/>
                <input type="text" placeholder="Rua" />

                <div className="flex gap-3">
                    <input type="number" name="" id="" placeholder="Número" className="w-52"/>
                    <input type="text" name="" id="" placeholder="Complemento" className="min-w-[348px]"/>
                </div>

                <div className="flex gap-3">
                    <input type="text" placeholder="Bairro" className="w-52"/>
                    <input type="text" name="" id="" placeholder="Cidade" className="w-full"/>
                    <input type="text" placeholder="UF" className="w-[60px]"/>
                </div>
            </div>
            
        </form>
    )
}