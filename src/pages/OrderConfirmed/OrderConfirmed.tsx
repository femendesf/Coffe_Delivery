import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext, useState } from "react"
import { CardsContext } from "../../context/CardsContext"


export function OrderConfirmed(){

    const {orderForm} = useContext(CardsContext)

    let payment = ''

    switch(orderForm.payment){
        case 'creditCard':
            payment ='Cartão de crédito'
            break;
        case 'debitCard':
            payment = 'Cartão de débito'
            break;
        case 'cash':
           payment = 'Dinheiro'
            break;
    }   
    

    return(
        <div className="justify-center items-center mt-28 animate-opacity">

            <div className="justify-start ">
                <h1 className="text-yellow-dark text-[32px]">Uhu! Pedido confirmado</h1>
                <p className="text-xl">Agora é só aguardar que logo o café chegará até você</p>
            </div>
            
            <section className="flex mt-10 gap-28 ">

                <div className="bg-gradient-to-r from-yellow-dark to-purple rounded-card min-w-[526px] p-[1px] ">
                    <div className=" flex flex-col gap-8 bg-background p-10 rounded-card h-full w-full" id="info_order">

                        <div>
                            <div className="bg-purple" id="icon">
                                <MapPin weight="fill" size={16}/>
                            </div>
                            
                            <section>
                            
                                <h2>Entrega em Rua <span className="font-bold">{orderForm.street}, {orderForm.numberHouse}</span> </h2>
                                <p>{orderForm.district} - {orderForm.city}-{orderForm.uf}</p>
                            </section>
                        </div>

                        <div>
                            <div className="bg-yellow" id="icon">
                                <Timer weight="fill"/>
                            </div>  

                            <section>
                                <h2>Previsão de entrega</h2>
                                <p className="font-bold">20 min - 30 min</p>
                            </section>
                            
                        </div>

                        <div>
                            <div className="bg-yellow-dark" id="icon">
                                <CurrencyDollar weight="fill"/>
                            </div>

                            <section>
                                <h2>Pagamento na entrega</h2>
                                <p className="font-bold">{payment}</p>
                            </section>
                            
                        </div>
                    </div>
                </div>
                
                <img src="src\assets\bikeDelivery.svg" alt="Logo bike delivery"/>
                
            </section>
        </div>
        
    )
}