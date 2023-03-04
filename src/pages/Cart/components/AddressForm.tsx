import { MapPinLine } from "phosphor-react"
import { useFormContext } from "react-hook-form"

export function AddressForm(){

    const {register} = useFormContext()    

    return(

        <main className="flex flex-col bg-base-card p-10 mt-3 rounded-md">

            <div className="flex mb-8 gap-2 ">
                <MapPinLine size={22} className="text-yellow-dark"/>
                <div>
                    <h1 className="font-Roboto font-semibold">Endereço de Entrega</h1>
                    <p className="text-sm">Informe o endereço onde deseja receber seu pedido</p>
                </div>
                
            </div>
        
            <div className="flex flex-col gap-4" id="input_address">
                <input 
                    type="number"
                    placeholder="CEP" 
                    className="w-52"
                    id="cep"
                    {...register('cep')}
                />

                <input 
                    type="text" 
                    placeholder="Rua"
                    id="street"
                    {...register('street')}
                />

                <div className="flex gap-3">

                    <input 
                        type="number"
                        id="numberHouse"
                        placeholder="Número"
                        className="w-52"
                        {...register('numberHouse')}
                    />

                    <input 
                        type="text"
                        placeholder="Complemento"
                        className="min-w-[348px]"
                        id="complement"
                        {...register('complement')}
                    />

                </div>

                <div className="flex gap-3">

                    <input 
                        type="text"
                        placeholder="Bairro"
                        className="w-52"
                        id="district"
                        {...register('district')}
                    />

                    <input 
                        type="text"
                        id="city"
                        placeholder="Cidade"
                        className="w-full"
                        {...register('city')}
                    />

                    <input 
                        type="text"
                        placeholder="UF"
                        className="w-[60px]"
                        id="uf"
                        {...register('uf')}
                    />

                </div>
            </div>
            
        </main>
    )
}