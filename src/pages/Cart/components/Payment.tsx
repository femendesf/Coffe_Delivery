import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"

import { useFormContext } from "react-hook-form"
import { InputComp } from "./Input";


export function Payment(){

    const {setValue, formState: {errors}} = useFormContext() 

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        const buttonValue = event.currentTarget.value;
        setValue('payment', buttonValue);
    }

    const {register} = useFormContext() 
    return(
        <div className="flex flex-col itemc mt-3 bg-base-card mb-[240px] p-10 rounded-md">
           
            <div className="flex gap-2">
                 <CurrencyDollar size={22} className="text-purple"/>
                <div>
                    <h2 className="text-base-subtitle">Pagamento</h2>
                    <p className="text-base-text text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
                
            </div>
            
            <div className="grid  grid-cols-3 gap-3 justify-between mt-8 " id="button_payment" {...register('payment')}>

                <button type="button" value="creditCard" onClick={handleButtonClick}> <CreditCard className="text-purple" size={16}/> CARTÃO DE CRÉDITO</button>
                <button type="button" value="debitCard" onClick={handleButtonClick}> <Bank className="text-purple" size={16}/> CARTÃO DE DÉBITO</button>
                <button type="button" value="cash" onClick={handleButtonClick}> <Money className="text-purple" size={16}/> DINHEIRO</button>

            </div>
            {errors.payment && <span className="text-red-400 mt-1">Escolha a forma de pagamento</span>}

        </div>
    )
}