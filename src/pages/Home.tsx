import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home(){
    return(
        <div>
            <div id='titulo' className='flex mt-24'>

                    <div>

                        <div className='w-[588px]' id='info1'>
                            <h1 className='text-5xl'>
                                Encontre o café perfeito para qualquer hora do dia
                            </h1>
                            <p className='text-xl text-base-subtitle mt-4'>
                                Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
                            </p>
                        </div>
                       

                        <div className='grid grid-cols-2 mt-16 w-[567px] items-center' id='sub_info'>
                        
                            <p> 
                                <span className='bg-yellow-dark rounded-full w-8 h-8'>
                                    <ShoppingCart size={20} weight='duotone' className='mt-[6px] ml-[5.5px]'/>
                                </span> 
                                Compra simples e segura
                            </p>

                            <p className=''> 
                                <span className='bg-base-text rounded-full w-8 h-8'> <Package className='mt-[6px] ml-[5.5px]' size={20}/> </span>
                                Embalagem mantém o café intacto
                            </p>

                            <p>
                                <span > <Timer size={20} className='bg-yellow rounded-full '/> </span>
                                Entrega rápida e rastreada
                            </p>

                            <p>
                                <span className='bg-purple rounded-full w-8 h-8'> <Coffee size={20} className='mt-[6px] ml-[5.5px]'/> </span>
                                O café chega fresquinho até você
                            </p>
            
                        </div>
                   
                    </div>
                
               
                    <img src="src\assets\cup._home.svg" alt="" className=''/>
               
            </div>

            <div className='mt-8'>
                <h1>
                    Nossos cafés
                </h1>

                <div className='mt-[34px]' id='cards'>
                
                    <img src="src\assets\coffes\expresso_tradicional.svg" alt="" />
                    <h1>Expresso Tradicional</h1>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                <div >
                    <span>R$</span><h1>9,90</h1>
                    <input type="number" name="" id="mount" />
                    <button> <ShoppingCart/> </button>
                </div>

                </div>

            </div>
            
        </div>
    )
}