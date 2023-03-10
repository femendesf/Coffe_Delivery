
import { AddressForm } from "./components/AddressForm"
import { CartCoffees } from "./components/CartCoffees"
import { Payment } from "./components/Payment"
import { CardsContext } from "../../context/CardsContext"

import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import {FormProvider, useForm } from 'react-hook-form'
import { useContext, useState} from "react"
import { NavLink } from "react-router-dom";
import { Coffee } from "phosphor-react"

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
        resolver: zodResolver(addressFormSchema)
    })

    const {createAddressForm, listCoffees, deleteListCoffees} = useContext(CardsContext)
    
    const {handleSubmit} = addressForm

    const navigate = useNavigate();
    
    //const [clicked, setClicked] = useState(false)

    function handleFormCreate(data: AddressDataSchema){
        createAddressForm(data)
        navigate('/orderConfirmed')
        deleteListCoffees()

    }

    if(listCoffees.length <= 0 ){

        return( // Screen listcoffe empty
            <div className="mt-40 items-center justify-center flex flex-col animate-opacity"> 
                <h1 className="text-4xl text-purple">Seu carrinho está vazio!</h1>
                <NavLink
                    to="/"
                >
                   <button className="hover:bg-yellow-hover flex gap-2 items-center mt-4 bg-yellow-light text-yellow-dark font-bold p-3 rounded-lg">
                        Clique aqui para voltar ao menu de cafés 
                        <Coffee size={18} weight='duotone'/> 
                    </button>
                </NavLink>
            </div>
        )

    }else{
        return( // Screen listcoffee
            <main className="flex mt-28 gap-8 justify-center ">
                <form>
                    
                    <div>
                        <h1 className="text-lg">Complete seu pedido</h1>
                        <FormProvider {...addressForm}>
                            <AddressForm/>
                            <Payment/>
                        </FormProvider>
                    </div>

                </form>

                    <div>
                        <h1 className="text-lg">Cafés selecionados</h1>
                        <div className="flex flex-col mt-3 bg-base-card w-[448px] p-10 rounded-card gap-3">
                            <CartCoffees/>
                            <button 
                                type="submit"
                                onClick={handleSubmit(handleFormCreate)}
                                className="mt-5 bg-yellow text-white font-bold text-sm py-3 rounded-md hover:bg-yellow-dark">
                                CONFIRMAR PEDIDO
                            </button>
                            
                        </div>
                        
                    </div>
            </main>
    
        )
    }
    

}