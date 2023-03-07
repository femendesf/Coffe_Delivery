import { MapPinLine } from "phosphor-react"
import { useFormContext } from "react-hook-form"

export function AddressForm(){

    const {register, formState: {errors}} = useFormContext()    

    return(

        <main className="flex flex-col bg-base-card p-10 mt-3 rounded-md">

            <div className="flex mb-8 gap-2 ">
                <MapPinLine size={22} className="text-yellow-dark"/>
                <div>
                    <h1 className="font-Roboto font-semibold">Endereço de Entrega</h1>
                    <p className="text-sm">Informe o endereço onde deseja receber seu pedido</p>
                </div>
                
            </div>
        
            <main className="flex flex-col gap-4" id="input_address">

                <div >
                    <input 
                        type="number"
                        placeholder="CEP" 
                        className="w-52"
                        id="cep"
                        {...register('cep', {valueAsNumber: true})}
                    
                    />
                    {errors.cep && <span>Informe o CEP</span>}
                </div>
                

                <div>
                     <input 
                        type="text" 
                        placeholder="Rua"
                        id="street"
                        {...register('street')}
                    />
                    {errors.street && <span>Informe a RUA</span>}
                </div>
               

                <section className="flex gap-3">

                    <div>
                        <input 
                            type="number"
                            id="numberHouse"
                            placeholder="Número"
                            className="w-52"
                            {...register('numberHouse', {valueAsNumber: true})}
                        />
                        {errors.numberHouse && <span>Informe o número da casa</span>}
                    </div>
                   

                    <input 
                        type="text"
                        placeholder="Complemento"
                        className="min-w-[348px]"
                        id="complement"
                        {...register('complement')}
                    />

                </section>

                <section className="flex gap-3">

                    <div className="">
                        <input 
                            type="text"
                            placeholder="Bairro"
                            className="w-52"
                            id="district"
                            {...register('district')}
                        />
                        {errors.district && <span>Informe o BAIRRO</span>}
                    </div>
                    

                    <div>
                        <input 
                            type="text"
                            id="city"
                            placeholder="Cidade"
                            className="w-full"
                            {...register('city')}
                        />
                        {errors.city && <span>Informe a CIDADE</span>}
                    </div>
                   
                    <div>
                        <input 
                            type="text"
                            placeholder="UF"
                            className="w-[60px]"
                            id="uf"
                            { ...register('uf')}
                        />
                        {errors.uf && <span>informe estado (UF) </span>}
                    </div>   
                    
                </section>

            </main>
            
        </main>
    )
}