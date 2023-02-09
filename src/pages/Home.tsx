import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from 'phosphor-react'

export function Home(){
    return(
        <div>

            <div className='mt-16 gap-10 flex' id='Parte do titulo'>

                <div className=''>
                    <h1 className='text-5xl mb-4'>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p className='text-xl leading-5 w-[588px]'>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                    
                  <div className='whitespace-nowrap flex mt-[66px]' id='teste'>
                    
                    <div className='mr-10 '>

                         <div className='flex gap-3 items-center mb-5'>
                            <span className='bg-yellow-dark '>
                                <ShoppingCartSimple weight='duotone'/>
                            </span>
                            Compra simples e segura
                        </div>

                        <div className='flex gap-3 items-center' >
                            <span className='bg-yellow'>
                                <Timer weight='duotone'/>
                            </span>
                            Entrega rápida e rastreada
                        </div>
                        
                    </div>
                    
                    <div>
                        <div className='flex gap-3 items-center mb-5'>
                            <span className='bg-base-text'>
                                <Package weight='duotone'/>
                            </span>
                            Embalagem mantém o café intacto
                        </div>

                        <div className='flex gap-3 items-center'>
                            <span className='bg-purple'>
                                <Coffee weight='duotone'/>
                            </span>
                            O café chega fresquinho até você
                        </div>
                    </div>


                  </div>
                 
                </div>

                <img src="src\assets\cup._home.svg" alt="" className='w-[476px] h-[360px]'/>

            </div>

            <div className='mt-8 '>
                <h1 className='text-[32px]'>
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