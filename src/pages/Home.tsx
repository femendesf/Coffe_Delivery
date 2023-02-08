import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from 'phosphor-react'

export function Home(){
    return(
        <div>

            <div className='mt-16 flex gap-14 justify-center' id='Parte do titulo'>

                <div className=''>
                    <h1 className='text-5xl w-[588px] mb-4'>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p className='text-xl leading-5 w-[588px]'>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                    
                    <div className='grid grid-cols-2 mt-[66px] w-[567px]' id='info_span'>
                        <p > 
                            <span className='bg-yellow-dark'>
                                <ShoppingCartSimple size={16} className='ml-2 mt-2'/>
                            </span>  
                            Compra simples e segura
                        </p>

                        <p> 
                            <span className='bg-base-text'>
                                <Package className='ml-2 mt-2'/> 
                            </span> Embalagem mantém o café intacto
                        </p>

                        <p> <span><Timer/></span>  Entrega rápida e rastreada</p>
                        <p> <span><Coffee/></span>  O café chega fresquinho até você</p>
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