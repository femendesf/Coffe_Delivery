export function CartCoffees(){
    return(
        <div className="flex flex-col itemc bg-base-card w-[448px] h-full
        ">
            <div> Expresso Tradicional</div>

            <div className="flex justify-between">
                <h3>Total de itens</h3>
                <span>R$29,70</span>
            </div>

            <div className="flex justify-between">
                <h3>Entrega</h3>
                <span>R$ 3,50</span>
            </div>

            <div className="flex justify-between">
                <h2>Total</h2>
                <span>R$ 33,20</span>
            </div>

            <button>CONFIRMAR PEDIDO</button>
        </div>
    )
}