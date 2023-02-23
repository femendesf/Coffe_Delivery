import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

export function Intro(){
    return (

        <div className='mt-[200px] gap-[50px] flex justify-center items-center' id='Parte do titulo'>
            <div>
                <h1 className='text-5xl mb-4 max-w-[588px]'>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className='text-xl leading-5 w-[588px]'>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>
                
            <div className='whitespace-nowrap flex mt-[66px]' id='span_info'>
                
                <div className='mr-10 '>

                    <p className='mb-5'>
                        <span className='bg-yellow-dark '>
                            <ShoppingCartSimple weight='fill'/>
                        </span>
                        Compra simples e segura
                    </p>

                    <p>
                        <span className='bg-yellow'>
                            <Timer weight='fill'/>
                        </span>
                        Entrega rápida e rastreada
                    </p>
                    
                </div>
                
                <div>
                    <p className='mb-5'>
                        <span className='bg-base-text'>
                            <Package weight='fill'/>
                        </span>
                        Embalagem mantém o café intacto
                    </p>

                    <p>
                        <span className='bg-purple'>
                            <Coffee weight='fill'/>
                        </span>
                        O café chega fresquinho até você
                    </p>
                </div>

            </div>
        </div>
        <img src="src\assets\cup._home.svg" alt="" className='w-[476px]'/>
    </div>
    )
}