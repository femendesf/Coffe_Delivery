import { Bank, Cards, CreditCard, CurrencyDollar, Money } from "phosphor-react"

export function Payment(){
    return(
        <div className="flex flex-col itemc mt-3 bg-base-card mb-[240px] p-10 rounded-md">
           
            <div className="flex gap-2">
                 <CurrencyDollar size={22} className="text-purple"/>
                <div>
                    <h2 className="text-base-subtitle">Pagamento</h2>
                    <p className="text-base-text text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
                
            </div>
            
            <div className="grid  grid-cols-3 gap-3 justify-between mt-8 " id="button_payment">
                <button> <CreditCard className="text-purple" size={16}/> CARTÃO DE CRÉDITO</button>
                <button> <Bank className="text-purple" size={16}/> CARTÃO DE DÉBITO</button>
                <button> <Money className="text-purple" size={16}/> DINHEIRO</button>
               
            </div>
        </div>
    )
}