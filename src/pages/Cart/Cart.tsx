
import { AddressForm } from "./components/AddressForm"
import { CartCoffees } from "./components/CartCoffees"
import { Payment } from "./components/Payment"

import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import {FormProvider, useForm } from 'react-hook-form'
import { useContext, useState } from "react"
import { CardsContext } from "../../context/CardsContext"

const addressFormSchema = zod.object({

    cep: zod.number(),
    street: zod.string(),
    numberHouse: zod.number(),
    complement: zod.string().optional(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string()
})

export type AddressDataSchema = zod.infer<typeof addressFormSchema>

export function CartIndex(){

    const addressForm = useForm<AddressDataSchema>({
        resolver: zodResolver(addressFormSchema)
    })

    const {createAddressForm} = useContext(CardsContext)

    const {handleSubmit} = addressForm

    function handleFormCreate(){
        console.log('Função executada')
    }
    
    return(
        <main>
            <form className="flex mt-28 gap-8 justify-center ">
           
                <div>
                    <h1 className="text-lg">Complete seu pedido</h1>
                    <FormProvider {...addressForm}>
                        <AddressForm/>
                    </FormProvider>
                    
                    <Payment/>
                </div>
                
                <div>
                    <h1 className="text-lg">Cafés selecionados</h1>

                    <div className="flex flex-col mt-3 bg-base-card w-[448px] p-10 rounded-card gap-3">
                        <CartCoffees/>
                        <button 
                            onClick={handleFormCreate}
                            className="mt-5 bg-yellow text-white font-bold text-sm py-3 rounded-md">
                            CONFIRMAR PEDIDO
                        </button>
                    </div>
                    
                </div>

            </form>
        </main>
        
    )
}