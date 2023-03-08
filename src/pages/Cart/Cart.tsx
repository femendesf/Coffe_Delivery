
import { AddressForm } from "./components/AddressForm"
import { CartCoffees } from "./components/CartCoffees"
import { Payment } from "./components/Payment"
import { CardsContext } from "../../context/CardsContext"

import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import {FormProvider, useForm } from 'react-hook-form'
import { useContext, useState} from "react"



const addressFormSchema = zod.object({

    cep: zod.number({required_error: 'Informe o CEP correto'}),
    street: zod.string({required_error: 'Informe a rua'}).min(1),
    numberHouse: zod.number({required_error: 'Informe o número da casa'}).min(1),
    complement: zod.string().optional(),
    district: zod.string({required_error: 'Informe o bairro'}).min(1),
    city: zod.string({required_error: 'Informe a cidade'}).min(1),
    uf: zod.string({required_error: 'Informe o estado'}).min(2),
    payment: zod.string()
})

export type AddressDataSchema = zod.infer<typeof addressFormSchema>

export function Order(){

    const addressForm = useForm<AddressDataSchema>({
        resolver: zodResolver(addressFormSchema),
        defaultValues:{
            payment: ''
        }
    })

    const {createAddressForm} = useContext(CardsContext)
    
    const {handleSubmit} = addressForm

    const navigate = useNavigate();
   
    function handleFormCreate(data: AddressDataSchema){
        createAddressForm(data)
        navigate('/orderConfirmed')
    }
    

    return(
        <main>
            <form onSubmit={handleSubmit(handleFormCreate)} className="flex mt-28 gap-8 justify-center ">
           
                <div>
                    <h1 className="text-lg">Complete seu pedido</h1>
            
                    <FormProvider {...addressForm}>
                        <AddressForm/>
                        <Payment
                        />
                    </FormProvider>
                </div>
                
                <div>
                    <h1 className="text-lg">Cafés selecionados</h1>

                    <div className="flex flex-col mt-3 bg-base-card w-[448px] p-10 rounded-card gap-3">
                        <CartCoffees/>
                        <button 
                            type='submit'
                            className="mt-5 bg-yellow text-white font-bold text-sm py-3 rounded-md">
                            CONFIRMAR PEDIDO
                        </button>
                        
                    </div>
                    
                </div>
                
            </form>
        </main>
        
    )
}